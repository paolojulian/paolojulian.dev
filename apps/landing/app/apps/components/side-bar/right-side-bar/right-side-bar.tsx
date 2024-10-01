'use client';
import { PTypography, Stack } from '@paolojulian.dev/design-system';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type NavId = 'history' | 'career' | 'interests';
type NavItem = {
  name: string;
  id: NavId;
};

export const navItems: NavItem[] = [];

function isNavSection(id: string): id is NavId {
  return !!navItems.find((item) => id === item.id);
}

export default function RightSideBar() {
  const [activeSection, setActiveSection] = useState<NavId>('history');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && isNavSection(id)) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Stack className='fixed right-4 md:right-10 top-6 md:top-10 bottom-6 md:bottom-10 justify-between items-end z-30'>
      <Stack className='gap-2 items-end opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'>
        {navItems.map((item, i) => (
          <SideBarLink
            key={`${item.name}_${i}`}
            isCurrent={activeSection === item.id}
            href={`#${item.id}`}
            label={item.name}
          />
        ))}
      </Stack>
      <span
        style={{
          writingMode: 'vertical-lr',
        }}
      >
        <PTypography className='text-gray rotate-180' variant='body'>
          paolojulian.dev/apps
        </PTypography>
      </span>
    </Stack>
  );
}

function SideBarLink({
  href,
  label,
  isCurrent,
}: {
  href: string;
  label: string;
  isCurrent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={classNames('duration-500 ease-in-out', {
        'text-white pointer-events-none': isCurrent,
        'text-gray hover:text-primary hover:-translate-x-1': !isCurrent,
      })}
    >
      <PTypography className='uppercase'>{label}</PTypography>
    </Link>
  );
}

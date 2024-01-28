'use client';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type NavId = 'about' | 'experience' | 'writing' | 'contact';
type NavItem = {
  name: string;
  id: NavId;
};

export const navItems: NavItem[] = [
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Writing',
    id: 'writing',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
];

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  if (element.id === 'about') {
    console.log('test', rect.top, rect.bottom);
  }
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isNavSection(id: string): id is NavId {
  return !!navItems.find((item) => id === item.id);
}

export default function RightSideBar() {
  const [activeSection, setActiveSection] = useState<NavId>('about');

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const isVisible = isInViewport(section);
        console.log('test', section.id, isVisible);
        const id = section.id;
        if (isVisible && isNavSection(id)) {
          setActiveSection(id);
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log({ activeSection });

  return (
    <Stack className='fixed right-10 top-10 bottom-10 justify-between items-end z-30'>
      <Stack className='gap-2 items-end'>
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
        <Typography className='text-gray rotate-180' variant='body'>
          paolojulian.dev
        </Typography>
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
        'text-gray hover:text-primary hover:-translate-x-4': !isCurrent,
      })}
    >
      <Typography className='uppercase'>{label}</Typography>
    </Link>
  );
}

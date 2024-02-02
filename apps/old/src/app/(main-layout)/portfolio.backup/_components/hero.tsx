'use client';
import Container from '@/_components/layouts/container';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import useScrolledDown from '@/_hooks/use-scrolled-down';
import { SECTIONS } from '@/app/(main-layout)/portfolio.backup/_context/sections-context';
import classNames from 'classnames';
import Link from 'next/link';
import { FunctionComponent, useRef } from 'react';

interface Props {
  // No Props
}

const HeroSection: FunctionComponent<Props> = () => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const readMoreRef = useRef<HTMLDivElement>(null);

  const isScrolledDown = useScrolledDown();

  return (
    <>
      <section
        id={SECTIONS[0]}
        className='flex flex-row min-h-[calc(100vh-7rem)] flex-1 w-full max-w-screen-2xl relative justify-center'
      >
        <Container className='flex-1 flex flex-col justify-center md:items-center text-left md:text-center gap-5 max-w-screen-2xl w-full relative'>
          <h1
            className={classNames(
              'font-medium tracking-wider text-7xl lg:text-7xl xl:text-7xl md:tracking-widest md:leading-[4.5rem] uppercase',
              'flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 justify-center'
            )}
            ref={logoRef}
          >
            <span>
              <span className='text-slate-300'>K</span>
              EEP
            </span>
            <span>
              <span className='text-slate-300'>I</span>T
            </span>
            <span>
              <span className='text-slate-300'>S</span>
              IMPLE
            </span>
            <span>
              <span className='text-slate-300'>S</span>
              TUPID
            </span>
          </h1>
          <div
            className='flex flex-col md:flex-row font-black text-[12px] tracking-[12.32px] uppercase md:items-center gap-2 md:gap-4 text-gray-400 font-sans pb-[4rem]'
            ref={professionRef}
          >
            <p>PAOLO JULIAN</p>
            <div className='h-[1px] md:h-[18px] w-full md:w-[2px] bg-primary-400'></div>
            <p>SOFTWARE ENGINEER</p>
          </div>

          <Container className='w-full absolute inset-x-0 bottom-0'>
            <Row className='py-2 md:py-8 justify-between items-center'>
              <Link
                href='/contact'
                className='h-12 lg:h-14 w-fit px-8 border border-gray-300 hover:border-primary-300 hover:bg-primary-50 transition font-medium flex flex-col justify-center items-center'
              >
                Get in touch
              </Link>
              <Row className='hidden md:flex gap-8 text-primary-400 font-medium'>
                <Link href=''>Linkedin</Link>
                <Link href=''>Facebook</Link>
                <Link href=''>Instagram</Link>
              </Row>
            </Row>
          </Container>
          <Stack
            ref={readMoreRef}
            className={classNames(
              'hidden md:flex absolute left-1/2 -bottom-8 -translate-x-1/2 items-center z-30 transition-opacity duration-1000',
              isScrolledDown ? 'opacity-0' : 'opacity-100'
            )}
          >
            <Stack className='space-y-2 animate-bounce items-center'>
              <p className=''>Read more</p>
              <div className='w-[1px] h-[64px] bg-slate-600'></div>
            </Stack>
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;

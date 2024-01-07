import { getPortfolioItems } from './portfolio.backup/_api/portfolio-item';
import { getPortfolio } from './portfolio.backup/_api/portfolio';
import { getLatestBlogPosts } from './blogs.v2/_api/blog-post';
import React from 'react';
import HeroSection from '@/app/(main-layout)/portfolio.backup/_components/hero';
import { SectionsProvider } from '@/app/(main-layout)/portfolio.backup/_context/sections-context';
import AboutSection from '@/app/(main-layout)/portfolio.backup/_components/about';
import ServicesSection from '@/app/(main-layout)/portfolio.backup/_components/services';
import ProjectsSection from '@/app/(main-layout)/portfolio.backup/_components/projects';
import ArticlesSection from '@/app/(main-layout)/portfolio.backup/_components/articles';

export default async function Home() {
  const [portfolioItems, portfolio, blogPosts] = await Promise.all([
    getPortfolioItems(),
    getPortfolio(),
    getLatestBlogPosts(),
  ]);

  return (
    <>
      <SectionsProvider>
        <div className='flex flex-row'>
          <div className='flex-1 w-full relative'>
            <HeroSection />
            <AboutSection
              resumeUrl={portfolio.resume.url}
              about={portfolio.about}
            />
            <ServicesSection />
            <ProjectsSection items={portfolioItems} />
            <ArticlesSection items={blogPosts} />
          </div>

          {/* <Stack className='hidden fixed right-0 top-1/2 -translate-y-1/2 w-[100px] lg:flex pl-8'>
            <Stack className='w-full pr-12 h-fit justify-center space-y-[15px] text-white'>
              <Link href='https://www.linkedin.com/in/pipz/'>
                <Fab size='sm'>
                  <LinkedinIcon className='w-3.5 h-auto' />
                </Fab>
              </Link>
              <Link href='mailto:paolojulian.dev@gmail.com'>
                <Fab size='sm'>
                  <MailIcon className='w-4 h-auto' />
                </Fab>
              </Link>
              <Link href='tel:09279488654'>
                <Fab size='sm'>
                  <PhoneIcon className='w-4 h-auto' />
                </Fab>
              </Link>
            </Stack>
          </Stack> */}
        </div>

        {/* <Footer /> */}
      </SectionsProvider>
    </>
  );
}

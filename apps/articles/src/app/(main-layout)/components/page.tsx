import ScrollToElementBtn from '@/_components/common/scroll-to-element-btn';
import SectionHeading from '@/_components/common/section-heading';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Container from '@/_components/layouts/container';
import Stack from '@/_components/layouts/stack';
import { FunctionComponent } from 'react';
import ComponentList from './_components/component-list';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async () => {
  return (
    <>
      <Container className='pt-12 pb-40 flex flex-col gap-8 xl:gap-20 z-10 relative'>
        <SectionHeading title='Components' />
        <Stack className='text-3xl md:text-7xl font-medium pt-12'>
          <h1 className=''>
            {/* <span className='text-slate-400'>Explore my articles,</span> */}
            <span className='text-slate-800'>
              {/* <br /> */}
              <span className='text-gray-400'>Discover</span> a selection of
              <span className='text-gray-400'> beautifully designed</span>{' '}
              components and templates that will{' '}
              <span className='text-gray-400'>elevate your project</span>. With
              a strong emphasis on aesthetics and functionality, you can create
              a{' '}
              <span className='text-gray-400'>
                stunning and user-friendly experience
              </span>
              .
            </span>
          </h1>
        </Stack>
        <button className='flex flex-row w-fit gap-4 md:pl-4 text-xl items-center group'>
          <ScrollToElementBtn targetId='component-list'>
            <span className='transition-colors group-hover:text-red-400 text-base font-black tracking-widest'>
              BROWSE NOW
            </span>
          </ScrollToElementBtn>
          <RightArrowIcon className='text-red-400 transition-transform group-hover:translate-x-full' />
        </button>
      </Container>
      <Container id='component-list'>
        <Stack className='h-full  text-slate-600'>
          {/* content */}
          <ComponentList />
        </Stack>
      </Container>
    </>
  );
};

export default BlogsPage;

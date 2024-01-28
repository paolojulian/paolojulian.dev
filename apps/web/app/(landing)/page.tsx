import Stack from '@repo/ui/components/stack';
import Menu from '../../components/Menu';
import MenuButton from '../../components/Menu/MenuButton';
import MenuContent from '../../components/Menu/MenuContent';
import MenuProvider from '../../components/Menu/context/MenuProvider';
import LeftSideBar from '../../components/SideBar/LeftSideBar';
import RightSideBar from '../../components/SideBar/RightSideBar';
import AboutSection from './components/about-section';
import ArticlesSection from './components/articles-section';
import CareerSection from './components/career-section';
import FooterSection from './components/footer-section';
import HeroSection from './components/hero-section';
import Image from 'next/image';
import { usePortfolio } from '../../graphql/usePortfolio';

export default async function Home() {
  const data = await usePortfolio();
  console.log({ data });

  return (
    <>
      <div
        className='w-screen h-screen fixed inset-0 -z-10 bg-black'
        style={{
          perspective: '1px',
        }}
      >
        <Image
          className='select-none pointer-events-none mix-blend-color-dodge bg-no-repeat bg-cover bg-fixed bg-center'
          style={{
            transform: 'translateZ(-1px)',
            scale: 2,
            perspective: '1px',
          }}
          alt='background'
          src='/assets/background-galaxy.png'
          fill
          priority
        />
      </div>
      <MenuProvider>
        <MenuContent>
          <main>
            <HeroSection />
            {/* Main */}
            <div className='bg-black'>
              <Stack className='max-w-screen-lg mx-auto py-[200px] gap-[400px] bg-black'>
                <AboutSection />
                {/* <ToolsSection /> */}
                <CareerSection />
                <ArticlesSection />
              </Stack>
            </div>
          </main>
          <FooterSection />
        </MenuContent>
        <Menu />
        <MenuButton />
        <LeftSideBar />
        <RightSideBar />
      </MenuProvider>
    </>
  );
}

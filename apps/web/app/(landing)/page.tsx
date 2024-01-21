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

export default function Home() {
  return (
    <>
      <MenuProvider>
        <MenuContent>
          <main>
            <HeroSection />
            {/* Main */}
            <Stack className='max-w-screen-lg mx-auto py-[200px] gap-[400px]'>
              <AboutSection />
              {/* <ToolsSection /> */}
              <CareerSection />
              <ArticlesSection />
            </Stack>
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

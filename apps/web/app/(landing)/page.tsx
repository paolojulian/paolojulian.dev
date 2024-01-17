import Stack from '@repo/ui/components/stack';
import AboutSection from './components/about-section';
import ArticlesSection from './components/articles-section';
import CareerSection from './components/career-section';
import FooterSection from './components/footer-section';
import HeroSection from './components/hero-section';
import ToolsSection from './components/tools-section';
import MenuButton from '../../components/Menu/MenuButton';
import MenuProvider from '../../components/Menu/context/MenuProvider';
import Menu from '../../components/Menu';
import MenuContent from '../../components/Menu/MenuContent';
import LeftSideBar from '../../components/SideBar/LeftSideBar';
import RightSideBar from '../../components/SideBar/RightSideBar';

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
              <ToolsSection />
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

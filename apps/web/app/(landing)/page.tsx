import Stack from '@repo/ui/components/stack';
import AboutSection from './components/about-section';
import ArticlesSection from './components/articles-section';
import CareerSection from './components/career-section';
import FooterSection from './components/footer-section';
import HeroSection from './components/hero-section';
import ToolsSection from './components/tools-section';
import MenuButton from '../../components/Menu/MenuButton';

export default function Home() {
  return (
    <>
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
      <MenuButton />
    </>
  );
}

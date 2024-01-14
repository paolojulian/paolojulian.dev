import Stack from '@repo/ui/components/stack';
import AboutSection from './components/about-section';
import HeroSection from './components/hero-section';
import ToolsSection from './components/tools-section';
import CareerSection from './components/career-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Main */}
      <Stack className='max-w-screen-xl mx-auto px-10 py-[200px] gap-[400px]'>
        <AboutSection />
        <ToolsSection />
        <CareerSection />
      </Stack>
    </main>
  );
}

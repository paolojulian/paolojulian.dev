import Stack from '@repo/ui/components/stack';
import {
  Menu,
  MenuButton,
  MenuContent,
  MenuProvider,
} from '@repo/ui/context/menu';
import Image from 'next/image';
import LeftSideBar from '../../components/side-bar/left-side-bar';
import RightSideBar from '../../components/side-bar/right-side-bar';
import { usePortfolio } from '../../graphql/use-portfolio';
import AboutSection from './components/about-section';
import ArticlesSection from './components/articles-section';
import CareerSection from './components/career-section';
import FooterSection from './components/footer-section';
import HeroSection from './components/hero-section';

export default async function Home() {
  const portfolio = await usePortfolio();

  if (!portfolio) return null;

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
              <Stack className='max-w-screen-lg mx-auto bg-black px-4 md:px-10 xl:px-0'>
                <AboutSection
                  portfolio={{
                    about: portfolio.about,
                    whatIDo: portfolio.whatIDo,
                  }}
                />
                <CareerSection
                  portfolio={{
                    careersCollection: portfolio.careersCollection,
                    experience: portfolio.experience,
                    toolsCollection: portfolio.toolsCollection,
                  }}
                />
                <ArticlesSection
                  portfolio={{
                    writing: portfolio.writing,
                  }}
                />
              </Stack>
            </div>
          </main>
          <FooterSection
            portfolio={{
              contact: portfolio.contact,
            }}
          />
        </MenuContent>
        <Menu />
        <MenuButton />
        <LeftSideBar
          portfolio={{
            contact: portfolio.contact,
          }}
        />
        <RightSideBar />
      </MenuProvider>
    </>
  );
}

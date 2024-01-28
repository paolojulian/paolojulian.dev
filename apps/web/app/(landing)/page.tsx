import Stack from '@repo/ui/components/stack';
import Image from 'next/image';
import Menu from '../../components/Menu';
import MenuButton from '../../components/Menu/MenuButton';
import MenuContent from '../../components/Menu/MenuContent';
import MenuProvider from '../../components/Menu/context/MenuProvider';
import LeftSideBar from '../../components/SideBar/LeftSideBar';
import RightSideBar from '../../components/SideBar/RightSideBar';
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
              <Stack className='max-w-screen-lg mx-auto py-[200px] gap-[400px] bg-black'>
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

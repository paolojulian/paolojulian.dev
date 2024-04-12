import Container from '@repo/ui/components/container';
import {
  Menu,
  MenuButton,
  MenuContent,
  MenuProvider,
} from '@repo/ui/context/menu';
import LeftSideBar from '../components/side-bar/left-side-bar';
import RightSideBar from '../components/side-bar/right-side-bar';
import HeroSection from './_hero';
import HistorySection from './_history';
import CareerSection from './_career';
import InterestsSection from './_interests';
import links from '@repo/ui/utils/links';

export default async function Home() {
  return (
    <MenuProvider>
      <MenuContent>
        <main className='bg-black text-white mb-40'>
          <Container className='max-w-screen-lg w-full mx-auto'>
            <HistorySection />
            <CareerSection />
            <InterestsSection />
          </Container>
        </main>
      </MenuContent>
      <Menu activePathname={links.about} />
      <MenuButton />
      <LeftSideBar />
      <RightSideBar />
    </MenuProvider>
  );
}

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

export default async function Home() {
  return (
    <MenuProvider>
      <MenuContent>
        <main className='bg-black text-white mb-40'>
          <Container className='max-w-screen-lg w-full mx-auto py-8'>
            <HeroSection />
            <HistorySection />
          </Container>
        </main>
      </MenuContent>
      <Menu />
      <MenuButton />
      <LeftSideBar />
      <RightSideBar />
    </MenuProvider>
  );
}

import { Container } from '../../components/Container';
import { MenuProvider } from '../../components/Menu';
import CareerSection from './_career';
import HistorySection from './_history';
import InterestsSection from './_interests';
import LeftSideBar from './components/side-bar/left-side-bar';
import RightSideBar from './components/side-bar/right-side-bar';

export default async function Home() {
  return (
    <>
      <main className='bg-black text-white mb-40'>
        <Container className='max-w-screen-lg w-full mx-auto'>
          <HistorySection />
          <CareerSection />
          <InterestsSection />
        </Container>
      </main>
      <LeftSideBar />
      <RightSideBar />
      <MenuProvider />
    </>
  );
}

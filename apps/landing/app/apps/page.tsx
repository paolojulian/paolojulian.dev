import FooterSection from '../(landing)/components/footer-section';
import { Container } from '../../components/Container';
import { MenuProvider } from '../../components/Menu';
import { usePortfolio } from '../../graphql/use-portfolio';
import AppList from './_app-list';
import LeftSideBar from './components/side-bar/left-side-bar';
import RightSideBar from './components/side-bar/right-side-bar';

export default async function Apps() {
  const portfolio = await usePortfolio();

  if (!portfolio) return null;

  return (
    <>
      <main className='bg-black text-white mb-40'>
        <Container className='w-full mx-auto' variant='wide'>
          <AppList />
        </Container>
      </main>
      <FooterSection
        portfolio={{
          contact: portfolio.contact,
        }}
      />
      <LeftSideBar />
      <RightSideBar />
      <MenuProvider />
    </>
  );
}

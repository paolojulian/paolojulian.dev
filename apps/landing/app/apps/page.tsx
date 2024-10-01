import {
  Menu,
  MenuButton,
  MenuContent,
  MenuProvider,
} from '@repo/ui/context/menu';
import links from '@repo/ui/utils/links';
import LeftSideBar from './components/side-bar/left-side-bar';
import RightSideBar from './components/side-bar/right-side-bar';
import AppList from './_app-list';
import FooterSection from '../(landing)/components/footer-section';
import { usePortfolio } from '../../graphql/use-portfolio';
import { Container } from '../../components/Container';

export default async function Apps() {
  const portfolio = await usePortfolio();

  if (!portfolio) return null;

  return (
    <MenuProvider>
      <MenuContent>
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
      </MenuContent>
      <Menu activePathname={`${links.base}/about`} />
      <MenuButton />
      <LeftSideBar />
      <RightSideBar />
    </MenuProvider>
  );
}

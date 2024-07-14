import Container from '@repo/ui/components/container';
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

export default async function Apps() {
  return (
    <MenuProvider>
      <MenuContent>
        <main className='bg-black text-white mb-40'>
          <Container className='w-full mx-auto' variant='wide'>
            <AppList />
          </Container>
        </main>
      </MenuContent>
      <Menu activePathname={`${links.base}/about`} />
      <MenuButton />
      <LeftSideBar />
      <RightSideBar />
    </MenuProvider>
  );
}

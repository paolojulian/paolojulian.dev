import Main from '@/_components/partials/main';
import Menu from '@/_components/partials/menu';
import MenuButton from '@/_components/partials/menu-btn';
import MenuProvider from '@/_context/menu-provider';
import Footer from '@/app/(main-layout)/_components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paolo Vincent Julian',
  description: 'Website created by Paolo Vincent Julian',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <div className='font-sans text-gray-800'>
        <Main>
          {children}
          <Footer />
        </Main>
        <Menu />
        <MenuButton />
      </div>
    </MenuProvider>
  );
}

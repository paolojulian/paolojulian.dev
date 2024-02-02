import MenuProvider from '@/_context/menu-provider';
import Main from '@/app/(portfolio)/_components/partials/main';
import Menu from '@/app/(portfolio)/_components/partials/menu';
import MenuButton from '@/app/(portfolio)/_components/partials/menu-btn/menu-btn';
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
      <div className='bg-new-white dark:bg-new-black text-new-white font-sans'>
        <Main>{children}</Main>
        <Menu />
        <MenuButton />
      </div>
    </MenuProvider>
  );
}

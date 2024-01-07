import MenuProvider from '@/_context/menu-provider';
import Main from '@/app/(portfolio)/_components/partials/main';
import Menu from '@/app/(portfolio)/_components/partials/menu';
import MenuButton from '@/app/(portfolio)/_components/partials/menu-btn/menu-btn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs | Paolo Julian',
  description: 'Blog list of Paolo Julian',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <Main>{children}</Main>
      <Menu />
      <MenuButton />
    </MenuProvider>
  );
}

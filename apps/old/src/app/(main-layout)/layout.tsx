import Footer from '@/app/(main-layout)/_components/footer';
import {
  Menu,
  MenuButton,
  MenuContent,
  MenuProvider,
} from '@repo/ui/context/menu';
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
        <MenuContent>
          {children}
          <Footer />
        </MenuContent>
        <Menu />
        <MenuButton />
      </div>
    </MenuProvider>
  );
}

import { ReactNode } from 'react';
import './styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paolo Julian',
  description: 'Personal website of Paolo Julian',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-black text-white'>{children}</body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';

const font = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '800'] });

export const metadata: Metadata = {
  title: 'Paolo Julian',
  description:
    'Blog Site by Paolo Julian created with Next, deployed with Turbo repo in Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}

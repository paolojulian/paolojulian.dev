import '@repo/ui/styles.css';
import './globals.css';
import type { Metadata } from 'next';

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
      <body className='bg-black text-white'>{children}</body>
    </html>
  );
}

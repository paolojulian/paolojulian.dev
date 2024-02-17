import type { Metadata } from 'next';
import '@repo/ui/styles.css';

export const metadata: Metadata = {
  title: 'Note Trainer',
  description: 'Fret Board mastery by Paolo Vincent Julian',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-black'>
      <body>{children}</body>
    </html>
  );
}

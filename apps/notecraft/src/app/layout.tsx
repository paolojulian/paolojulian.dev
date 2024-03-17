import type { Metadata } from 'next';
import './globals.css';
import '@repo/ui/styles.css';

export const metadata: Metadata = {
  title: 'Note Craft',
  description: 'Made by Paolo Vincent Julian',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-black text-white h-full'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#0d0d0d' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#fcf5ed' />
        <meta name='msapplication-TileColor' content='#b91d47' />
        <meta name='theme-color' content='#fcf5ed' />
      </head>

      <body className='h-full sm:max-w-[430px] sm:mx-auto sm:w-full relative'>
        {children}
      </body>
    </html>
  );
}

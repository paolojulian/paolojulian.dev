import classNames from 'classnames';
import type { Metadata } from 'next';
import { Anton, Comfortaa, Inter, Lora, Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const capital = Anton({
  weight: '400',
  variable: '--font-capital',
  subsets: ['latin'],
});
const serif = Inter({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
});
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});
const sans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});
const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Paolo Vincent Julian',
  description: 'Website created by Paolo Vincent Julian',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no'
        />
        <meta name='theme-color' content='#ffffff' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body
        className={classNames(
          'bg-new-black',
          `${capital.variable} font-capital`,
          `${serif.variable} font-serif`,
          `${lora.variable} font-lora`,
          `${sans.variable} font-sans`,
          `${comfortaa.variable} font-comfortaa`,
          'font-sans',
          'overscroll-contain',
          'overflow-x-hidden max-w-screen'
        )}
      >
        {children}
        <div id='modal-root'></div>
        <div id='fixed'></div>
        {/* <ProgressBar /> */}
      </body>
    </html>
  );
}

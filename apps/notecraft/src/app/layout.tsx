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

        <link rel="preload" href="/notes/C-low.mp3" as="audio" />
        <link rel="preload" href="/notes/C#-low.mp3" as="audio" />
        <link rel="preload" href="/notes/D-low.mp3" as="audio" />
        <link rel="preload" href="/notes/D#-low.mp3" as="audio" />
        <link rel="preload" href="/notes/E-low.mp3" as="audio" />
        <link rel="preload" href="/notes/F-low.mp3" as="audio" />
        <link rel="preload" href="/notes/F#-low.mp3" as="audio" />
        <link rel="preload" href="/notes/G-low.mp3" as="audio" />
        <link rel="preload" href="/notes/G#-low.mp3" as="audio" />
        <link rel="preload" href="/notes/A-low.mp3" as="audio" />
        <link rel="preload" href="/notes/A#-low.mp3" as="audio" />
        <link rel="preload" href="/notes/B-low.mp3" as="audio" />

        <link rel="preload" href="/notes/C-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/C#-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/D-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/D#-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/E-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/F-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/F#-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/G-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/G#-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/A-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/A#-mid.mp3" as="audio" />
        <link rel="preload" href="/notes/B-mid.mp3" as="audio" />

        <link rel="preload" href="/notes/C-high.mp3" as="audio" />
        <link rel="preload" href="/notes/C#-high.mp3" as="audio" />
        <link rel="preload" href="/notes/D-high.mp3" as="audio" />
        <link rel="preload" href="/notes/D#-high.mp3" as="audio" />
        <link rel="preload" href="/notes/E-high.mp3" as="audio" />
        <link rel="preload" href="/notes/F-high.mp3" as="audio" />
        <link rel="preload" href="/notes/F#-high.mp3" as="audio" />
        <link rel="preload" href="/notes/G-high.mp3" as="audio" />
        <link rel="preload" href="/notes/G#-high.mp3" as="audio" />
        <link rel="preload" href="/notes/A-high.mp3" as="audio" />
        <link rel="preload" href="/notes/A#-high.mp3" as="audio" />
        <link rel="preload" href="/notes/B-high.mp3" as="audio" />

        <meta name='msapplication-TileColor' content='#b91d47' />
        <meta name='theme-color' content='#fcf5ed' />
      </head>

      <body className='h-full sm:max-w-[430px] sm:mx-auto sm:w-full relative'>
        {children}
      </body>
    </html>
  );
}

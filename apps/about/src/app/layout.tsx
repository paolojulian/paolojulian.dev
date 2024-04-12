import './globals.css';
import '@repo/ui/styles.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Paolo Julian - About',
  description:
    'About page by Paolo Julian created with Next, deployed with Turbo repo in Vercel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-black'>{children}</body>
    </html>
  );
}

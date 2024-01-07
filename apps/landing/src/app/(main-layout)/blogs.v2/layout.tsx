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
    <div className='max-w-screen-2xl mx-auto   relative w-full'>
      {children}
    </div>
  );
}

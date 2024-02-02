import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components | Paolo Julian',
  description: 'Components list of Paolo Julian',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=' '>{children}</div>;
}

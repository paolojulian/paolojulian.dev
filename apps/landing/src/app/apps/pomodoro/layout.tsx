import classNames from 'classnames';
import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';

const font = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Pomodoro App | Paolo Julian',
  description: 'Pomodoro app of Paolo Julian',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={classNames(font.className, 'text-new-white')}>
      {children}
    </div>
  );
}

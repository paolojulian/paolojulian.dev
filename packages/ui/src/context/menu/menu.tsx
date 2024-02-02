'use client';
import classNames from 'classnames';
import Image from 'next/image';
import { useMenuContext } from './context/menu-provider';
import HomePageDesktop from './assets/home-page.desktop.png';
import AboutPageDesktop from './assets/about-page.desktop.png';
import ArticlePageDesktop from './assets/article-page.desktop.png';
import MenuItem from './menu-item';

export default function Menu() {
  const { isOpen } = useMenuContext();

  return (
    <nav
      className={[
        'ui-fixed ui-bottom-0 ui-left-0 ui-bg-black/90 ui-backdrop-blur',
        'ui-py-4 ui-md:py-6 ui-lg:py-12 ui-h-[400px] md:ui-h-[500px] ui-w-full ui-z-40',
        'ui-duration-500 ui-overflow-hidden',
        'ui-ease-menu',
        isOpen ? 'ui-translate-y-0' : 'ui-translate-y-full',
      ].join(' ')}
    >
      <div
        className={classNames(
          'ui-flex ui-flex-row ui-justify-center',
          'ui-w-full ui-py-8 ui-pr-8 ui-gap-6',
          'ui-overflow-x-auto ui-text-new-white',
          'ui-transition-transform ui-duration-500 ui-ease-menu',
          isOpen
            ? 'lg:ui-scale-100 ui-translate-y-0'
            : 'lg:ui-scale-75 lg:-ui-translate-y-[120%]',
          isOpen ? '' : 'ui-pointer-events-none'
        )}
      >
        <MenuItem
          ImageComponent={
            <Image
              src={HomePageDesktop}
              className='ui-mix-blend-lighten'
              alt='Home Page'
              fill
            />
          }
          title='Home'
          isActive
          link='#'
        />
        <MenuItem
          ImageComponent={
            <Image
              src={AboutPageDesktop}
              className='ui-mix-blend-lighten'
              alt='About Page'
              fill
            />
          }
          title='About'
          isActive={false}
          link='#'
        />
        <MenuItem
          ImageComponent={
            <Image
              src={ArticlePageDesktop}
              className='ui-mix-blend-lighten'
              alt='Article Page'
              fill
            />
          }
          title='Article'
          isActive={false}
          link='#'
        />
      </div>
    </nav>
  );
}

'use client';
import classNames from 'classnames';
import links from '../../utils/links';
import AboutPageDesktop from './assets/about-page.desktop.png';
import AboutPagePhone from './assets/about-page.phone.png';
import AboutPageTablet from './assets/about-page.tablet.png';
import ArticlePageDesktop from './assets/article-page.desktop.png';
import ArticlePagePhone from './assets/article-page.phone.png';
import ArticlePageTablet from './assets/article-page.tablet.png';
import AppsPageDesktop from './assets/apps-page.desktop.png';
import AppsPagePhone from './assets/apps-page.phone.png';
import AppsPageTablet from './assets/apps-page.tablet.png';
import HomePageDesktop from './assets/home-page.desktop.png';
import HomePagePhone from './assets/home-page.phone.png';
import HomePageTablet from './assets/home-page.tablet.png';
import { useMenuContext } from './context/menu-provider';
import MenuItem from './menu-item';

type MenuProps = {
  activePathname: string;
};

export default function Menu({ activePathname }: MenuProps) {
  const { isOpen } = useMenuContext();

  return (
    <nav
      className={[
        'ui-fixed ui-bottom-0 ui-left-0 ui-bg-white/20 ui-backdrop-blur-lg',
        'ui-py-4 ui-md:py-6 ui-lg:py-12 ui-h-[450px] md:ui-h-[600px] xl:ui-h-[500px] ui-w-full ui-z-40',
        'ui-duration-500 ui-overflow-y-hidden ui-overflow-x-auto',
        'ui-ease-menu',
        isOpen ? 'ui-translate-y-0' : 'ui-translate-y-full',
      ].join(' ')}
    >
      <div
        className={classNames(
          'ui-flex ui-flex-row ui-justify-center',
          'ui-mx-auto ui-w-fit ui-px-6',
          'ui-w-full ui-py-8 ui-gap-4 xl:ui-gap-6',
          'ui-overflow-x-auto ui-text-new-white',
          'ui-transition-transform ui-duration-500 ui-ease-menu',
          isOpen
            ? 'lg:ui-scale-100 ui-translate-y-0'
            : 'lg:ui-scale-75 lg:-ui-translate-y-[120%]',
          isOpen ? '' : 'ui-pointer-events-none'
        )}
      >
        <MenuItem
          imageUrls={{
            phone: HomePagePhone,
            tablet: HomePageTablet,
            desktop: HomePageDesktop,
          }}
          title='Home'
          isActive={activePathname === links.base}
          link={`${links.base}`}
        />
        <MenuItem
          imageUrls={{
            phone: AboutPagePhone,
            tablet: AboutPageTablet,
            desktop: AboutPageDesktop,
          }}
          title='About'
          isActive={activePathname === `${links.base}/about-me`}
          link={`${links.base}/about-me`}
        />
        <MenuItem
          imageUrls={{
            phone: ArticlePagePhone,
            tablet: ArticlePageTablet,
            desktop: ArticlePageDesktop,
          }}
          title='Article'
          isActive={false}
          link={`${links.articles}/blogs`}
        />
        <MenuItem
          imageUrls={{
            phone: AppsPagePhone,
            tablet: AppsPageTablet,
            desktop: AppsPageDesktop,
          }}
          title='Apps'
          isActive={false}
          link={`${links.base}/apps`}
        />
      </div>
    </nav>
  );
}

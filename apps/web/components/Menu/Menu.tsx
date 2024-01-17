'use client';
import styles from './menu.module.css';
import classNames from 'classnames';
import { useMenuContext } from './context/MenuProvider';

export default function Menu() {
  const { isOpen } = useMenuContext();

  return (
    <nav
      className={[
        'fixed bottom-0 left-0 bg-black/90',
        'py-4 md:py-6 lg:py-12 h-[400px] md:h-[500px] w-full z-40',
        'duration-500 overflow-hidden',
        'ease-menu',
        isOpen ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
    >
      <div
        className={classNames(
          styles.menu,
          'flex flex-row justify-center',
          'w-full pb-8 pr-8',
          'overflow-x-auto text-new-white',
          'transition-transform duration-500 ease-menu',
          isOpen
            ? 'lg:scale-100 translate-y-0'
            : 'lg:scale-75 lg:-translate-y-[120%]',
          isOpen ? '' : 'pointer-events-none'
        )}
      >
        {/* <div className='flex flex-row gap-4 h-full w-full'>
          <MenuItem
            title='Home'
            imageUrls={{
              desktop: '/assets/menu/home-page.desktop.png',
              tablet: '/assets/menu/home-page.tablet.png',
              phone: '/assets/menu/home-page.phone.png',
            }}
            isActive={pathname === '/'}
            link='/'
          />
          <MenuItem
            title='About'
            imageUrls={{
              desktop: '/assets/menu/about-page.desktop.png',
              tablet: '/assets/menu/about-page.tablet.png',
              phone: '/assets/menu/about-page.phone.png',
            }}
            isActive={pathname === '/about'}
            link='/about'
          />
          <MenuItem
            title='Articles'
            imageUrls={{
              desktop: '/assets/menu/article-page.desktop.png',
              tablet: '/assets/menu/article-page.tablet.png',
              phone: '/assets/menu/article-page.phone.png',
            }}
            isActive={pathname === '/blogs'}
            link='/blogs'
          />
          <MenuItem
            title='Apps'
            imageUrls={{
              desktop: '/assets/menu/component-page.desktop.png',
              tablet: '/assets/menu/component-page.tablet.png',
              phone: '/assets/menu/component-page.phone.png',
            }}
            isActive={false}
            link='#'
          />
          <MenuItem
            title='Contact'
            imageUrls={{
              desktop: '/assets/menu/contact-page.desktop.png',
              tablet: '/assets/menu/contact-page.tablet.png',
              phone: '/assets/menu/contact-page.phone.png',
            }}
            isActive={pathname === '/contact'}
            link='/contact'
          />
        </div> */}
      </div>
    </nav>
  );
}

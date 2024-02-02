'use client';
import Container from '@/_components/layouts/container';
import ArticleIcon from '@/_components/partials/menu/components/icons/article-icon';
import ComponentIcon from '@/_components/partials/menu/components/icons/components-icon';
import ContactIcon from '@/_components/partials/menu/components/icons/contact-icon';
import PortfolioIcon from '@/_components/partials/menu/components/icons/portfolio-icon';
import useMenuContext from '@/_context/menu-provider/use-menu-context';
import ArrowScrollBar from '@/app/(main-layout)/blogs.v2/_components/scrollbars/arrow-scrollbar';
import { usePathname } from 'next/navigation';
import { FunctionComponent } from 'react';
import MenuItem from './menu-item';

export const dataTestId = {
  container: 'menu-container',
};

interface Props {
  // no props
}

const Menu: FunctionComponent<Props> = () => {
  const { isOpen } = useMenuContext();
  const pathname = usePathname();

  return (
    <nav
      className={[
        'fixed bottom-0 left-0 bg-slate-950',
        'py-4 md:py-6 lg:py-12 h-[400px] md:h-[500px] w-full z-30',
        'duration-500',
        'ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
        isOpen ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
      data-testid={dataTestId.container}
    >
      <Container
        className={[
          'max-w-screen-2xl mx-auto w-full',
          'h-[280px] md:h-[300px]',
          'overflow-x-auto text-white',
          'transition-transform duration-500 ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
          isOpen ? 'lg:scale-100 translate-y-0' : 'lg:scale-75',
          isOpen ? '' : 'pointer-events-none',
        ].join(' ')}
      >
        <ArrowScrollBar addOverlayOnBorders scrollAmount={500}>
          <div className='w-fit flex flex-row gap-4 h-full'>
            <MenuItem
              ImageComponent={<PortfolioIcon className='h-20 md:h-28 w-auto' />}
              description={
                'Discover my journey, explore my portfolio, see the tools I use, and learn about my creative skills.'
              }
              isActive={pathname === '/'}
              link='/'
              title='About'
            />
            <MenuItem
              ImageComponent={<ArticleIcon className='h-20 md:h-28 w-auto' />}
              description={
                'Dive into a world of insights and knowledge through my articles. Explore diverse topics and gain valuable insights.'
              }
              isActive={pathname === '/blogs'}
              link='/blogs'
              title='Articles'
            />
            <MenuItem
              ImageComponent={<ComponentIcon className='h-20 md:h-28 w-auto' />}
              description={
                'Unlock the power of custom components. Explore unique solutions tailored to your needs, enhancing your projects.'
              }
              isActive={pathname === '/components'}
              link='/components'
              title='Components'
            />
            <MenuItem
              ImageComponent={<ContactIcon className='h-20 md:h-28 w-auto' />}
              description={
                "Connect with me on the Contact page. Reach out, ask questions, or discuss collaboration opportunities. Let's get in touch!"
              }
              isActive={pathname === '/contact'}
              link='/contact'
              title='Contact'
            />
          </div>
        </ArrowScrollBar>
      </Container>
    </nav>
  );
};

export default Menu;

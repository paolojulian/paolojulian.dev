'use client';
import Container from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/container';
import MenuItem from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/menu/menu-item';
import useMenuContext from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/context/menu-provider/use-menu-context';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Menu: FunctionComponent<Props> = () => {
  const { isOpen } = useMenuContext();

  return (
    <nav
      className={[
        'absolute bottom-0 left-0 bg-slate-950',
        'py-12 h-1/2 w-full z-0',
        'duration-500',
      ].join(' ')}
    >
      <Container
        className={[
          'max-w-screen-2xl mx-auto w-full',
          'grid grid-cols-2 lg:grid-cols-4 gap-4 text-white transition duration-500',
          'ease-[cubic-bezier(0.45,0.02,0.09,0.98)]',
          isOpen ? 'scale-100 translate-y-0' : 'scale-75 translate-y-1/2',
        ].join(' ')}
      >
        <MenuItem
          title='About'
          description='All about me, my work, and my tech stack.'
        />
        <MenuItem
          title='Articles'
          description='Things I wrote during my journey.'
        />
        <MenuItem
          title='Components'
          description='Custom components I personally designed.'
        />
        <MenuItem
          title='Contact'
          description='Getting in touch, socials, emails and more.'
        />
      </Container>
    </nav>
  );
};

export default Menu;

import MenuProvider from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/context/menu-provider';
import Menu from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/menu';
import MenuButton from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/menu-btn/menu-btn';
import React, { FunctionComponent } from 'react';
import Main from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/main';
import Hero from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/hero/hero';
import About from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/about';
import Work from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/work';
import Tools from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/tools';
import Articles from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/articles';
import Footer from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/footer';

interface Props {
  // no props
}

const Workarea: FunctionComponent<Props> = () => {
  return (
    <MenuProvider>
      <div className='font-sans text-gray-800'>
        <Main>
          <Hero />
          <About />
          <Work />
          <Tools />
          <Articles />
          <Footer />
        </Main>
        <Menu />
        <MenuButton />
      </div>
    </MenuProvider>
  );
};

export default Workarea;

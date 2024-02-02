import About from '@/app/(main-layout)/_components/about';
import Articles from '@/app/(main-layout)/_components/articles';
import Hero from '@/app/(main-layout)/_components/hero';
import Tools from '@/app/(main-layout)/_components/tools';
import Work from '@/app/(main-layout)/_components/work';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const LandingPage: FunctionComponent<Props> = async () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Tools />
      <Articles />
    </>
  );
};

export default LandingPage;

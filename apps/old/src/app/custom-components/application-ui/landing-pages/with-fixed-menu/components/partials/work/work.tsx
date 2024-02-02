import { getPortfolioItems } from '@/app/(main-layout)/portfolio.backup/_api/portfolio-item';
import Container from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/container';
import SectionHeading from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/section-heading';
import WorkItem from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/partials/work/work-item';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Work: FunctionComponent<Props> = async () => {
  const portfolioItems = await getPortfolioItems();

  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <Container className='py-12 lg:py-24 h-full'>
        <SectionHeading number={3} section='Work'></SectionHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 h-full relative items-end'>
          {portfolioItems.map((portfolioItem, i) => (
            <WorkItem title={portfolioItem.name} imageUrl={portfolioItem.image.url} key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Work;

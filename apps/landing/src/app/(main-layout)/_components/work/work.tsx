import EnterAnimationList from '@/_components/animations/enter-animation-list';
import SectionHeading from '@/_components/common/section-heading';
import Container from '@/_components/layouts/container';
import { getPortfolioItems } from '@/app/(main-layout)/_api/portfolio-item';
import { FunctionComponent } from 'react';
import WorkItem from './work-item';

interface Props {
  // no props
}

const Work: FunctionComponent<Props> = async () => {
  const portfolioItems = await getPortfolioItems();

  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <Container className='py-12 lg:py-24 h-full'>
        <SectionHeading RightContent='03' title='Work'></SectionHeading>
        <EnterAnimationList className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 h-full relative items-end'>
          {portfolioItems.map((portfolioItem, i) => (
            <WorkItem
              title={portfolioItem.name}
              imageUrl={portfolioItem.image.url}
              key={i}
            />
          ))}
        </EnterAnimationList>
      </Container>
    </div>
  );
};

export default Work;

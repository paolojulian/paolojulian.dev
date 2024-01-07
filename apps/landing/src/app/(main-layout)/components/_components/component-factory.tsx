import React, { FunctionComponent } from 'react';
import { ComponentCategories } from '../types';
import ComponentCard from './component-card';

const MemoizedComponentCard = React.memo(ComponentCard);

export type ComponentFactoryProps = {
  category: ComponentCategories;
};

const ComponentFactory: FunctionComponent<ComponentFactoryProps> = ({
  category,
}) => {
  switch (category) {
    case 'application-ui':
      return (
        <>
          <MemoizedComponentCard
            title='Layouts'
            variantCount={5}
            href='/components/application-ui/layouts'
            imageUrl='/assets/application-ui/layouts/layouts.png'
          />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
        </>
      );
    case 'marketing':
      return (
        <>
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
        </>
      );
    case 'ecommerce':
      return (
        <>
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
          <MemoizedComponentCard title='Coming soon...' variantCount={1} />
        </>
      );
  }
};

export default ComponentFactory;

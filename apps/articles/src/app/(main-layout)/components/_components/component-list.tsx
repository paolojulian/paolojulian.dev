'use client';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useState } from 'react';
import { ComponentCategories } from '../types';
import CategoryTab from './category-tab';
import ComponentFactory from './component-factory';

const MemoizedCategoryTab = React.memo(CategoryTab);

export type ComponentListProps = {
  // no props
};

const ComponentList: FunctionComponent<ComponentListProps> = () => {
  const [activeCategory, setActiveCategory] =
    useState<ComponentCategories>('application-ui');

  return (
    <Stack className='pb-8 space-y-12'>
      <Row>
        <MemoizedCategoryTab
          title='Application UI'
          description='Includes modals, text inputs, buttons, tables, and various foundational components.'
          category='application-ui'
          onClick={setActiveCategory}
          isActive={activeCategory === 'application-ui'}
        />
        <MemoizedCategoryTab
          title='Marketing'
          description='Comprising heroes, features, newsletters, pricing, and an array of other essential components.'
          category='marketing'
          onClick={setActiveCategory}
          isActive={activeCategory === 'marketing'}
        />
        <MemoizedCategoryTab
          title='Ecommerce'
          description='Encompassing product listings, shopping carts, checkout processes, and additional essential components.'
          category='ecommerce'
          onClick={setActiveCategory}
          isActive={activeCategory === 'ecommerce'}
        />
      </Row>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative'>
        <ComponentFactory category={activeCategory} />

        {/* gradient overlay */}
        <div className='absolute bottom-0 left-0 right-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent pointer-events-none z-10'></div>
        {/* show more */}
        <div className='absolute bottom-4 left-0 right-0 h-1/4 w-full z-10 flex flex-col justify-end items-center'>
          <button className='px-5 py-2 bg-slate-800 hover:bg-red-400 active:bg-red-500 text-slate-50 shadow'>
            Show more
          </button>
        </div>
      </div>
    </Stack>
  );
};

export default ComponentList;

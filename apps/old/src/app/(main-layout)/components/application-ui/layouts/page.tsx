import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import ComponentShowcase from '../../_components/component-showcase';

export type ApplicationUILayoutsPageProps = {
  // no props
};

const MemoizedComponentShowcase = React.memo(ComponentShowcase);

const ApplicationUILayoutsPage: FunctionComponent<
  ApplicationUILayoutsPageProps
> = () => {
  return (
    <>
      <div>
        <Stack
          className='h-full text-slate-600 px-8 py-8 md:py-16'
          style={{
            minHeight: 'calc(100vh - 70px)',
          }}
        >
          {/* header */}
          <Stack className='space-y-4 pb-12 md:pb-24'>
            <div className='space-x-4'>
              <Link
                href='/components'
                className='md:hover:text-red-400 font-medium'
              >
                Components
              </Link>
              <span>/</span>
              <span>Application UI</span>
            </div>
            <div className='relative w-fit'>
              <h1 className='font-capital pointer-events-none text-slate-800 text-5xl md:text-8xl w-full uppercase'>
                Layouts
              </h1>
              <div className='absolute translate-y-2 md:translate-y-3 top-1/2 -right-4 w-16 h-[3px] bg-red-400 pointer-events-none'></div>
            </div>

            <Stack className='py-12 space-y-12'>
              <MemoizedComponentShowcase
                title='Branded sidebar with header'
                componentUrl='/custom-components/application-ui/layouts/brand-sidebar-with-header'
              />
              <MemoizedComponentShowcase
                title='Responsive sidebar with header'
                componentUrl='/custom-components/application-ui/layouts/responsive-sidebar-with-header'
              />
              <MemoizedComponentShowcase
                title='Stacked header'
                componentUrl='/custom-components/application-ui/layouts/stacked-header'
              />
              <MemoizedComponentShowcase
                title='Multi Column'
                componentUrl='/custom-components/application-ui/layouts/multi-column'
              />
              <MemoizedComponentShowcase
                title='Multi Column with Header'
                componentUrl='/custom-components/application-ui/layouts/multi-column-with-header'
              />
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default ApplicationUILayoutsPage;

import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import ResizableContainer from './common/resizable-container';

export type ComponentShowcaseProps = {
  title: string;
  componentUrl: string;
};

const ComponentShowcase: FunctionComponent<ComponentShowcaseProps> = ({
  title,
  componentUrl,
}) => {
  return (
    <Stack className='space-y-4'>
      <div className='flex flex-col md:flex-row justify-between md:items-center'>
        <h2 className='font-semibold text-lg'>{title}</h2>

        <Link href={componentUrl}>
          <Row className='items-center space-x-1 text-red-400 text-sm font-medium'>
            <span>Full screen</span>
            <RightArrowIcon />
          </Row>
        </Link>
      </div>
      <ResizableContainer>
        <iframe
          src={componentUrl}
          title={title}
          className='w-full h-full rounded lg:rounded-2xl'
        />
      </ResizableContainer>
    </Stack>
  );
};

export default ComponentShowcase;

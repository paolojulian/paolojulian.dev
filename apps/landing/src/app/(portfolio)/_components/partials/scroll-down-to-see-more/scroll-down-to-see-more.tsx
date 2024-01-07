'use client';
import Text from '@/_components/common/typography/text';
import Stack from '@/_components/layouts/stack';
import useScrolledDown from '@/_hooks/use-scrolled-down';
import classNames from 'classnames';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const ScrollDownToSeeMore: FunctionComponent<Props> = () => {
  const isScrolledDown = useScrolledDown(1);

  return (
    <div
      className={classNames(
        'duration-500',
        isScrolledDown ? 'opacity-0' : 'opacity-100'
      )}
    >
      <Stack className='hidden md:flex absolute bottom-0 left-20 lg:left-56 h-48 gap-2'>
        <Text>Scroll down to see more.</Text>
        <div className='border-l border-new-highlight flex-1'></div>
      </Stack>
    </div>
  );
};

export default ScrollDownToSeeMore;

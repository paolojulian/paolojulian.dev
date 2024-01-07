import Text from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/text';
import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
  description: string;
}

const MenuItem: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div
      className={[
        'flex flex-col border border-slate-400 p-2 md:p-6 xl:p-12 gap-2',
        'cursor-pointer relative group',
        'hover:bg-slate-100/10',
      ].join(' ')}
      role='button'
    >
      <div className='absolute left-0 top-0 w-4 transition-opacity opacity-0 group-hover:opacity-100 aspect-square bg-primary-300'></div>
      <Uppercase as='h3' className='text-base md:text-xl xl:text-2xl'>
        {title}
      </Uppercase>
      <Text className='hidden md:block text-base xl:text-lg text-slate-400'>
        {description}
      </Text>
    </div>
  );
};

export default MenuItem;

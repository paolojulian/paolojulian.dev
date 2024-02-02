import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
  imageUrl: string;
}

const WorkItem: FunctionComponent<Props> = ({ title, imageUrl }) => {
  return (
    <div className='flex flex-col gap-2 text-gray-700'>
      <Uppercase className='text-base lg:text-xl'>{title}</Uppercase>
      <div className='aspect-[420/300] h-full bg-gradient-to-b from-primary-50 to-transparent w-full flex justify-center items-center relative p-8'>
        <div className='relative aspect-[360/240] h-full w-full bg-white'>
          <Image
            className='object-cover object-center'
            alt={title}
            src={imageUrl}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default WorkItem;

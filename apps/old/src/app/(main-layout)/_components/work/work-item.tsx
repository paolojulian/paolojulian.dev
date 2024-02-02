import { EnterAnimationListItem } from '@/_components/animations/enter-animation-list';
import TitleWithBullet from '@/_components/common/title-with-bullet';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface Props {
  title: string;
  imageUrl: string;
}

const WorkItem: FunctionComponent<Props> = ({ title, imageUrl }) => {
  return (
    <EnterAnimationListItem>
      <div className='flex flex-col gap-2 text-gray-700'>
        <TitleWithBullet title={title} />
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
    </EnterAnimationListItem>
  );
};

export default WorkItem;

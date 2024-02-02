import Text from '@/_components/common/typography/text';
import Uppercase from '@/_components/common/typography/uppercase';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  datePublished: string;
  description: string;
  slug: string;
  title: string;
}

const GlobalSearchModalItem: FunctionComponent<Props> = ({
  datePublished,
  description,
  slug,
  title,
}) => {
  return (
    <Link
      href={slug ? `/blogs/${slug}` : '#'}
      className='flex flex-col md:flex-row gap-6 items-center transition-colors hover:bg-new-accent/20 p-4 border-b border-new-highlighLighter'
    >
      <div className='flex-1'>
        <p className='italic font-medium text-new-highlightLighter text-sm mb-1'>
          {datePublished}
        </p>
        <Uppercase
          as='h4'
          className='font-semibold text-xl line-clamp-3 text-new-black'
        >
          {title}
        </Uppercase>
        <Text className='line-clamp-2 text-new-highlight'>{description}</Text>
      </div>
    </Link>
  );
};

export const GlobalSearchModalItemSkeleton = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6 items-center p-4 animate-pulse border-b border-new-highlighLighter'>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='italic text-new-highlight text-sm h-4 w-[40%] bg-gray-100 rounded-full'></div>
        <div className='flex flex-col gap-2'>
          <div className='h-6 w-[100%] bg-new-highlighLighter rounded-full'></div>
          <div className='h-6 w-[80%] bg-new-highlighLighter rounded-full'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='h-4 w-[100%] bg-gray-100 rounded-full'></div>
          <div className='h-4 w-[40%] bg-gray-100 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchModalItem;

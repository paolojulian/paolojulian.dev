import Stack from '@/_components/layouts/stack';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent, useMemo } from 'react';

export type ComponentCardProps = {
  title: string;
  variantCount: number;
  imageUrl?: string;
  href?: string;
};

const ComponentCard: FunctionComponent<ComponentCardProps> = ({
  title,
  variantCount,
  imageUrl = undefined,
  href = '#',
}) => {
  const variantCountText = useMemo(() => {
    if (variantCount > 1) {
      return `${variantCount} variants`;
    }

    return `${variantCount} variant`;
  }, [variantCount]);

  return (
    <Link href={href} role='button'>
      <Stack
        className='px-3 py-2 hover:bg-neutral-300/20 active:bg-neutral-400/30 relative'
        role='button'
      >
        <div className='lg:aspect-[12/7] bg-neutral-200/50 mb-2 flex justify-center items-center relative'>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neutral-300/50 to-transparent z-10'></div>
          <div className='relative aspect-[16/9] w-3/4 shadow-lg bg-white'>
            {imageUrl ? (
              <Image
                className='z-0'
                width={700}
                height={426}
                src={imageUrl}
                alt={title}
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : null}
          </div>
        </div>
        <h4 className='font-semibold'>{title}</h4>
        <p className='text-sm text-neutral-500'>{variantCountText}</p>
      </Stack>
    </Link>
  );
};

export default ComponentCard;

import classNames from 'classnames';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

export type ProjectImageProps = {
  alt: string;
  src: string;
  dummy?: boolean;
  hasEffects?: boolean;
};

const ProjectImage: FunctionComponent<ProjectImageProps> = ({
  alt,
  src,
  hasEffects = true,
}) => {
  return (
    <div className='relative'>
      {hasEffects ? (
        <>
          {/* overlay */}
          <div className='absolute inset-0 bg-[#FAD4C0] transition-transform -translate-x-full group-hover:translate-x-0 z-10'></div>
          {/* overlay */}
          <div className='absolute inset-0 bg-light z-0'></div>
        </>
      ) : null}
      {/* image */}
      <div
        className={classNames(
          'h-[300px] md:h-[400px] xl:h-[400px] w-full md:w-[400px] xl:w-[480px] z-20 relative overflow-hidden',
          'opacity-80',
          hasEffects ? 'cursor-pointer' : 'pointer-events-none'
        )}
      >
        {src ? (
          <Image
            className={classNames(
              // 'absolute inset-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
              hasEffects ? 'transition md:group-hover:scale-105' : ''
            )}
            alt={alt}
            src={src}
            height={400}
            width={400}
            style={{
              objectFit: 'cover',
              marginInline: 'auto',
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProjectImage;

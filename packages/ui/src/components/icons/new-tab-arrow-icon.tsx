import { SVGAttributes } from 'react';
import cn from '@repo/ui/utils/cn';

interface Props extends SVGAttributes<SVGElement> {}

export default function NewTabArrowIcon({ className, ...props }: Props) {
  return (
    <svg
      width='54'
      height='55'
      viewBox='0 0 54 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('ui-text-secondary', className)}
      {...props}
    >
      <g clip-path='url(#clip0_2414_7900)'>
        <path
          d='M24.4898 15.9316L40.0283 20.0952M40.0283 20.0952L35.8648 35.6337M40.0283 20.0952L14.6971 34.7202'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2414_7900'>
          <rect
            width='39'
            height='39'
            fill='white'
            transform='translate(34.5 0.769531) rotate(60)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

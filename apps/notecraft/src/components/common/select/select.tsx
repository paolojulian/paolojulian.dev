'use client';
import { useClickOutside } from '../../../utils/use-click-outside/use-click-outside';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import { Fragment, ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

interface Props {
  // eslint-disable-next-line no-unused-vars
  children: ({ handleClose }: { handleClose: () => void }) => ReactElement;
  placeholder: string;
  value?: string;
}

export default function Select({ children, placeholder, value }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
  });
  const handleClick = () => setIsOpened((prev) => !prev);
  const handleClose = () => setIsOpened(false);
  const handleClickOutside = () => setIsOpened(false);

  useClickOutside(popperElement, handleClickOutside);

  return (
    <Fragment>
      <button
        className={cn(
          'flex-1',
          'px-6',
          'w-full h-full aspect-[4.45/1]',
          'bg-gray/10',
          'border border-gray/10 focus:border-white rounded-lg',
          'focus:ring-white focus:outline-none'
        )}
        ref={setReferenceElement}
        onClick={handleClick}
      >
        <div className='flex items-center justify-center gap-4'>
          <Typography className='text-white capitalize'>
            {value ?? placeholder}
          </Typography>
          <svg
            width='16'
            height='15'
            viewBox='0 0 16 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='-mt-1'
          >
            <g clip-path='url(#clip0_79_532)'>
              <path
                d='M1.21448 4.89258H14.7855C15.0257 4.89263 15.2605 4.9639 15.4603 5.09738C15.66 5.23086 15.8156 5.42056 15.9075 5.64249C15.9995 5.86442 16.0235 6.10863 15.9767 6.34423C15.9298 6.57983 15.8142 6.79625 15.6443 6.96613L8.85882 13.7517C8.63102 13.9794 8.3221 14.1073 8 14.1073C7.6779 14.1073 7.36898 13.9794 7.14118 13.7517L0.355659 6.96613C0.185827 6.79625 0.0701766 6.57983 0.0233271 6.34423C-0.0235223 6.10863 0.000533418 5.86442 0.0924526 5.64249C0.184372 5.42056 0.340028 5.23086 0.539742 5.09738C0.739457 4.9639 0.974264 4.89263 1.21448 4.89258Z'
                fill='#FCF5ED'
              />
            </g>
            <defs>
              <clipPath id='clip0_79_532'>
                <rect
                  width='16'
                  height='13.2147'
                  fill='white'
                  transform='translate(0 0.892578)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
      {isOpened &&
        createPortal(
          <div
            ref={setPopperElement}
            className='my-2'
            style={styles.popper}
            {...attributes.popper}
          >
            {children({ handleClose })}
          </div>,
          document.body
        )}
    </Fragment>
  );
}

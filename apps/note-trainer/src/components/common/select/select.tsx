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
        type='button'
        className={cn(
          'flex-1',
          'px-6 py-4',
          'border-[3px] border-primary focus:border-white rounded-lg',
          'focus:ring-white focus:outline-none'
        )}
        ref={setReferenceElement}
        onClick={handleClick}
      >
        <Typography className='text-primary'>{value ?? placeholder}</Typography>
      </button>
      {isOpened &&
        createPortal(
          <div
            ref={setPopperElement}
            className='mt-2'
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

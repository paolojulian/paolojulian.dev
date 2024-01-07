'use client';
import Fab from '@/_components/buttons/fab';
import LeftArrowIcon from '@/_components/icons/left-arrow-icon';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import classNames from 'classnames';
import React, {
  FunctionComponent,
  HtmlHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  addOverlayOnBorders?: boolean;
  scrollAmount?: number;
}

const ArrowScrollBar: FunctionComponent<Props> = ({
  addOverlayOnBorders = false,
  scrollAmount = 320,
  className,
  children,
  ...props
}) => {
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setScrollLeftVisible(scrollLeft > 0);
        setScrollRightVisible(scrollLeft + clientWidth < scrollWidth);
      });
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize the pill position and visibility
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (!scrollLeftVisible) return;
    handleScroll('left');
  };
  const handleScrollLeft = () => {
    if (!scrollRightVisible) return;
    handleScroll('right');
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    switch (direction) {
      case 'left':
        container.scrollTo({
          left: container.scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
        break;
      case 'right':
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
        break;
      default:
        throw new Error('Invalid scroll type');
    }
  };

  return (
    <div
      className={classNames('relative flex flex-row items-center group/arrows')}
    >
      {/* <div className='px-4'>
        <Fab
          theme='white'
          type='button'
          onClick={handleScrollRight}
          disabled={scrollLeftVisible}
        >
          <LeftArrowIcon className='text-new-white' />
        </Fab>
      </div> */}
      <div
        ref={containerRef}
        className={classNames(
          'flex flex-row overflow-auto lg:overflow-hidden scroll-smooth snap-x snap-mandatory',
          className
        )}
        {...props}
      >
        {children}
      </div>
      {/* <div className='px-4'>
        <Fab
          theme='white'
          onClick={handleScrollLeft}
          disabled={scrollRightVisible}
        >
          <RightArrowIcon className='text-new-white' />
        </Fab>
      </div> */}
      {/* left arrow */}
      <div
        className={classNames(
          'absolute left-0 inset-y-0 hidden md:flex flex-col group/scroll justify-center px-6 group/fab',
          addOverlayOnBorders
            ? 'hover:bg-gradient-to-r from-black/50 to-transparent'
            : ''
        )}
        role='button'
        onClick={handleScrollRight}
      >
        <Fab
          className={classNames(
            'opacity-0 md:group-hover/arrows:opacity-100 transition scale-90',
            scrollLeftVisible
              ? ' group-hover/scroll:scale-100 group-active/scroll:scale-90'
              : 'pointer-events-none'
          )}
          disabled={!scrollLeftVisible}
          theme='white'
          type='button'
        >
          <LeftArrowIcon />
        </Fab>
      </div>
      {/* right */}
      <div
        className={classNames(
          'absolute right-0 inset-y-0 hidden md:flex flex-col group/scroll justify-center px-6 group/fab',
          addOverlayOnBorders
            ? 'hover:bg-gradient-to-l from-black/50 to-transparent'
            : ''
        )}
        role='button'
        onClick={handleScrollLeft}
      >
        <div className='drop-shadow-xl'>
          <Fab
            className={classNames(
              'opacity-0 md:group-hover/arrows:opacity-100 transition-opacity scale-90',
              scrollRightVisible
                ? ' group-hover/scroll:scale-100 group-active/scroll:scale-90'
                : 'pointer-events-none'
            )}
            disabled={!scrollRightVisible}
            theme='white'
          >
            <RightArrowIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default ArrowScrollBar;

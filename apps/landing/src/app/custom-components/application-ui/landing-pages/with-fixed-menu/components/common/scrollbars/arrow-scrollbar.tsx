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
  scrollAmount?: number;
}

const ArrowScrollBar: FunctionComponent<Props> = ({
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

  const handleScrollRight = () => handleScroll('left');
  const handleScrollLeft = () => handleScroll('right');

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
          theme='primary'
          type='button'
          onClick={handleScrollRight}
          disabled={scrollLeftVisible}
        >
          <LeftArrowIcon className='text-white' />
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
          theme='primary'
          onClick={handleScrollLeft}
          disabled={scrollRightVisible}
        >
          <RightArrowIcon className='text-white' />
        </Fab>
      </div> */}
      {/* left arrow */}
      {scrollLeftVisible ? (
        <div
          className='absolute left-0 inset-y-0 hidden md:flex flex-col group/scroll justify-center px-6 group/fab'
          role='button'
          onClick={handleScrollRight}
        >
          <Fab
            className='opacity-0 md:group-hover/arrows:opacity-100 transition-opacity scale-90 group-hover/scroll:scale-100'
            theme='primary'
            type='button'
          >
            <LeftArrowIcon className='text-white' />
          </Fab>
        </div>
      ) : null}
      {/* right */}
      {scrollRightVisible ? (
        <div
          className='absolute right-0 inset-y-0 hidden md:flex flex-col group/scroll justify-center px-6 group/fab'
          role='button'
          onClick={handleScrollLeft}
        >
          <div className='drop-shadow-xl'>
            <Fab
              className='opacity-0 md:group-hover/arrows:opacity-100 transition-opacity scale-90 group-hover/scroll:scale-100'
              theme='primary'
            >
              <RightArrowIcon className='text-white' />
            </Fab>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ArrowScrollBar;

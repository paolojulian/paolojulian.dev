'use client';
import ReactDOM from 'react-dom';
import React, {
  FunctionComponent,
  ImgHTMLAttributes,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import classNames from 'classnames';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  // no props
}

const ZoomableImage: FunctionComponent<Props> = ({ ...props }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleToggleZoom = () => setIsZoomed((prev) => !prev);

  useEffect(() => {
    if (isZoomed) {
      window.addEventListener('scroll', handleToggleZoom);
      return () => window.removeEventListener('scroll', handleToggleZoom);
    }
  }, [isZoomed]);

  useLayoutEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (imageRef.current && isZoomed) {
        const image = imageRef.current;

        const viewportAspectRatio = window.innerWidth / window.innerHeight;
        const imageAspectRatio = image.naturalWidth / image.naturalHeight;

        if (imageAspectRatio > viewportAspectRatio) {
          image.style.width = '100%';
          image.style.height = 'auto';
        } else {
          image.style.height = '100%';
          image.style.width = 'auto';
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isZoomed]);

  return (
    <>
      <figure className='items-center py-4 gap-[8px] flex flex-col'>
        <div
          className={classNames(
            'cursor-zoom-in relative group',
            isZoomed ? 'z-[9999px]' : ''
          )}
          role='button'
          onClick={handleToggleZoom}
        >
          <div className='absolute inset-0 transition group-hover:bg-new-highlight/10'></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img {...props} alt={props.alt || ''} />
        </div>
        <div className='text-new-highlight text-sm'>{props.alt}</div>
      </figure>

      {isZoomed && modalRoot
        ? ReactDOM.createPortal(
            <div
              className='fixed inset-0 bg-black/90 z-[9999] flex flex-col items-center justify-center'
              role='button'
              onClick={handleToggleZoom}
            >
              <div className='w-full h-full cursor-zoom-out flex justify-center items-center'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  {...props}
                  alt={props.alt || ''}
                  ref={imageRef}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </div>,
            modalRoot
          )
        : null}
    </>
  );
};

export default ZoomableImage;

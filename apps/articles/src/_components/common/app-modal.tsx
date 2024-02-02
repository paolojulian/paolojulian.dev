import ReactDOM from 'react-dom';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';
import Row from '@/_components/layouts/row';
import usePortal from '@/_hooks/use-portal/use-portal';
import LeftArrowIcon from '@/_components/icons/left-arrow-icon';

export type AppModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const AppModal: FunctionComponent<AppModalProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeModal = useCallback(() => {
    document.body.classList.remove('modal--open');
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0 });
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal--open');
    } else {
      closeModal();
    }
  }, [isOpen, closeModal]);

  const modalRoot = usePortal('modal-root');

  if (modalRoot === null) {
    return null;
  }

  return ReactDOM.createPortal(
    // container
    <div
      className={classNames(
        'fixed inset-0 z-50 transition-opacity backdrop-blur-sm',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
    >
      <div
        className='fixed inset-0 bg-black/50 overflow-y-auto md:py-[100px]'
        ref={containerRef}
        role='button'
        onClick={closeModal}
      >
        <div
          className={classNames(
            'max-w-screen-lg w-full mx-auto bg-white z-10',
            'transition-transform cursor-auto relative',
            'shadow-[0_4px_28px_4px_rgba(0,0,0,0.15)]',
            isOpen ? 'translate-y-0' : 'translate-y-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* close */}
          <Row className='flex px-4 md:px-12 py-4 md:pt-12'>
            <button
              className='w-14 aspect-square transition bg-white hover:border-primary-300 hover:text-red-400 border border-slate-300 flex justify-center items-center'
              onClick={closeModal}
            >
              <LeftArrowIcon />
            </button>
          </Row>
          {children}
        </div>
      </div>

      {/* content */}
    </div>,
    modalRoot
  );
};

export default AppModal;

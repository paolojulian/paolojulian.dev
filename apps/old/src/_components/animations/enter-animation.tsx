'use client';
import classNames from 'classnames';
import { type Variants, motion } from 'framer-motion';
import { FunctionComponent, ReactNode } from 'react';

type EnterAnimationTypes = 'default' | 'fade';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: EnterAnimationTypes;
}

const EnterAnimation: FunctionComponent<Props> = ({
  children,
  className,
  delay = 0,
  type = 'default',
}) => {
  const variants: Record<EnterAnimationTypes, Variants> = {
    default: {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          delay,
          y: { stiffness: 1000, velocity: -100 },
        },
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000, delay },
        },
      },
    },
    fade: {
      open: {
        opacity: 1,
        transition: {
          delay,
        },
      },
      closed: {
        opacity: 0,
      },
    },
  };

  return (
    <motion.div
      className={classNames('motion-reduce:transition-none', className)}
      initial={'closed'}
      whileInView={'open'}
      variants={variants[type]}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
    >
      {children}
    </motion.div>
  );
};

export default EnterAnimation;

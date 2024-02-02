'use client';
import { motion } from 'framer-motion';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
};

const EnterAnimationList: FunctionComponent<Props> = ({
  children,
  className,
}) => {
  return (
    <motion.li
      className={className}
      initial='closed'
      variants={variants}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
      whileInView='open'
    >
      {children}
    </motion.li>
  );
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const EnterAnimationListItem: FunctionComponent<Props> = ({
  children,
  className,
}) => {
  return (
    <motion.ul className={className} variants={itemVariants}>
      {children}
    </motion.ul>
  );
};

export default EnterAnimationList;

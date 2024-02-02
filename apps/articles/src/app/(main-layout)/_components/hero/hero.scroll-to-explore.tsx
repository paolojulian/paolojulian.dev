'use client';
import React, { FunctionComponent, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

interface Props {
  // no props
}

const ScrollToExplore: FunctionComponent<Props> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['end end', 'start start'],
  });

  return (
    <motion.div
      className='flex flex-col gap-2'
      style={{ opacity: scrollYProgress }}
      ref={ref}
    >
      <p className='tracking-wide'>SCROLL TO EXPLORE</p>
      <div className='w-[3px] bg-primary-400 h-16'>&nbsp;</div>
    </motion.div>
  );
};

export default ScrollToExplore;

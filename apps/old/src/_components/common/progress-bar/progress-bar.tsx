'use client';
import React, { FunctionComponent } from 'react';
import { AppProgressBar } from 'next-nprogress-bar';

interface Props {
  // no props
}

const ProgressBar: FunctionComponent<Props> = () => {
  return (
    <AppProgressBar
      height='4px'
      color='#1f2937'
      options={{ showSpinner: false, speed: 700 }}
      shallowRouting
    />
  );
};

export default ProgressBar;

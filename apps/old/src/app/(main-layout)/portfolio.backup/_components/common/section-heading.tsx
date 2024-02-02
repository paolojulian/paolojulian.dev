'use client';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLHeadingElement> {
  number: number;
  section: string;
}

const SectionHeading: FunctionComponent<Props> = ({ number, section }) => {
  return (
    <div className='border-b-2 border-slate-400 p-2'>
      <h2 className='text-[20px] text-slate-400 tracking-widest'>
        <span className='text-red-400'>{`0${number}`}</span>&nbsp;
        <span>{`//`}</span>&nbsp;
        <span className='uppercase'>{section}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;

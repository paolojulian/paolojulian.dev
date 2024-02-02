import { DATA_TEST } from './blockquote.constants';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLQuoteElement> {
  // no props
}

const Blockquote: FunctionComponent<Props> = (props) => {
  return (
    <blockquote
      {...props}
      className='border-l-4 border-slate-300 italic pl-4 text-slate-400 mb-2'
      data-testid={DATA_TEST.container}
    ></blockquote>
  );
};

export default Blockquote;

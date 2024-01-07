import React, { FunctionComponent } from 'react';

export type AppTagProps = {
  tag: string;
} & React.HtmlHTMLAttributes<HTMLParagraphElement>;

const AppTag: FunctionComponent<AppTagProps> = ({ tag, ...props }) => {
  return (
    <p
      className='rounded-full py-[7px] px-[30px] bg-new-accent/10 border border-new-highlight text-new-white'
      {...props}
    >
      {`#${tag}`}
    </p>
  );
};

export default AppTag;

import Uppercase from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/common/typography/uppercase';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLHeadingElement> {
  number?: number;
  section: string;
}

const SectionHeading: FunctionComponent<Props> = ({ number, section }) => {
  return (
    <div className='border-b-2 border-slate-500 text-slate-500 p-2 flex flex-row justify-start items-end gap-4 w-full text-lg'>
      {typeof number === 'number' ? (
        <span className='bg-primary-400 h-8 w-8 flex justify-center items-center text-white'>{`0${number}`}</span>
      ) : null}

      <Uppercase as='h2' type='wide'>
        {section}
      </Uppercase>
    </div>
  );
};

export default SectionHeading;

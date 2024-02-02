import Uppercase from '@/_components/common/typography/uppercase';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  title: string;
  RightContent?: ReactNode;
}

const SectionHeading: FunctionComponent<Props> = ({
  RightContent = null,
  title,
}) => {
  return (
    <div className='border-b-2 border-new-white text-new-white flex justify-between items-end md:p-2'>
      <Uppercase
        className='tracking-widest md:tracking-[0.375rem] text-base'
        as='h2'
      >
        {title}
      </Uppercase>
      <span>{RightContent}</span>
    </div>
  );
};

export default SectionHeading;

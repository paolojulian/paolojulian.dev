import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

interface Props {
  number: number;
  name: string;
  description: React.ReactNode | string;
}

const ProjectOverviewItem: FunctionComponent<Props> = ({
  number,
  name,
  description,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col lg:flex-row',
        'gap-2 lg:gap-12 justify-between items-start lg:items-center first:border-y border-b border-slate-300 py-[30px]'
      )}
    >
      <p className='text-slate-500 text-sm md:text-base'>0{number}</p>
      <h4 className='tracking-wider text-slate-800 text-xl lg:min-w-[250px] lg:flex-1 flex justify-center items-center'>
        {name}
      </h4>
      <div className='flex-1'>
        {typeof description === 'string' ? (
          <p className='text-slate-500'>{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
};

export default ProjectOverviewItem;

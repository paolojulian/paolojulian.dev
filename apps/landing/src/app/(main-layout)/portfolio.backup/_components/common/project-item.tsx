'use client';
import RightArrowIcon from '@/_components/icons/right-arrow-icon';
import Stack from '@/_components/layouts/stack';
import Image from 'next/image';
import {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';
import { IPortfolioItem } from '../../_contentful';
import ProjectDetailsModal from '../modals/project-detail-modal';

type ProjectItemVariants = 'left-image' | 'right-image';

export type ProjectItemProps = {
  project: IPortfolioItem;
  number: number;
  variant?: ProjectItemVariants;
};

const ProjectItemContext = createContext<IPortfolioItem>({
  name: '',
  content: '',
  description: '',
  image: {
    url: '',
  },
  tags: [],
});
export const useProjectItemContext = () => useContext(ProjectItemContext);

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  project,
  number,
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  return (
    <ProjectItemContext.Provider value={project}>
      <div
        className='border-b border-slate-300 group transition md:hover:bg-red-50/50'
        role='button'
        onClick={handleOpenDetails}
      >
        <div className='flex flex-col md:flex-row justify-between items-center py-[25px] gap-[20px] md:gap-[50px]'>
          <div className='aspect-[380/360] w-[380px] border border-primary-300/30 relative'>
            <Image
              className='object-cover'
              src={project.image.url}
              alt={project.name}
              fill
            />
          </div>
          <Stack className='flex-1 space-y-[10px] items-start md:max-w-[500px] xl:max-w-[720px]'>
            <p className='text-[16px] tracking-[1.4px] text-slate-700'>{`0${number}`}</p>
            <p className='uppercase text-2xl md:text-3xl font-medium text-slate-700 tracking-[2.24px]'>
              {project.name}
            </p>
            <p className='text-slate-500 text-base md:text-lg line-clamp-4 xl:line-clamp-6'>
              {project.description}
            </p>
            <button className='flex flex-row justify-center items-center space-x-[10px] text-primary-400'>
              <span>SEE MORE</span>
              <div className='transition-transform group-hover:translate-x-4'>
                <RightArrowIcon />
              </div>
            </button>
          </Stack>
        </div>
      </div>
      <ProjectDetailsModal isOpen={openDetails} onClose={handleCloseDetails} />
    </ProjectItemContext.Provider>
  );
};

export default ProjectItem;

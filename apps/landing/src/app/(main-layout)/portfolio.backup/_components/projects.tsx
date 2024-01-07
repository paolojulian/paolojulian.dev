'use client';
import React, { FunctionComponent } from 'react';
import Stack from '@/_components/layouts/stack';
import { SECTIONS } from '@/app/(main-layout)/portfolio.backup/_context/sections-context';
import SectionHeading from '@/app/(main-layout)/portfolio.backup/_components/common/section-heading';
import ProjectItem from '@/app/(main-layout)/portfolio.backup/_components/common/project-item';
import { IPortfolioItem } from '@/app/(main-layout)/portfolio.backup/_contentful';
import Container from '@/_components/layouts/container';

interface Props {
  items: IPortfolioItem[];
}

const MemoizedProjectItem = React.memo(ProjectItem);

const ProjectsSection: FunctionComponent<Props> = ({ items }) => {
  return (
    <section
      id={SECTIONS[3]}
      className='bg-white flex flex-row flex-1 w-full z-10'
    >
      <Container className='flex flex-col pt-[100px] md:pt-[150px] w-full'>
        <div className='text-left'>
          <SectionHeading number={3} section='latest projects'></SectionHeading>
        </div>
        <Stack className=''>
          {items.map((item, i) => (
            <MemoizedProjectItem
              number={i + 1}
              project={item}
              key={item.name}
            />
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default ProjectsSection;

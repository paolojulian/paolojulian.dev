import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useRef } from 'react';
import AppModal, { AppModalProps } from '@/_components/common/app-modal';
import classNames from 'classnames';
import { useProjectItemContext } from '../common/project-item';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import Row from '@/_components/layouts/row';
import ProjectImage from '../common/project-image';
import AppTag from '@/_components/common/app-tag';
import Container from '@/_components/layouts/container';
import ProjectOverviewItem from '@/app/(main-layout)/portfolio.backup/_components/modals/project-overview-item';

interface Props extends Omit<AppModalProps, 'children'> {
  // no props
}

const ProjectDetailsModal: FunctionComponent<Props> = ({
  isOpen,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = useProjectItemContext();

  return (
    <AppModal isOpen={isOpen} {...props}>
      <div ref={containerRef}>
        <Container className='flex flex-col space-y-16 py-12 bg-white'>
          <Stack className='space-y-16'>
            <Stack className='relative'>
              <p className='text-base text-slate-400 uppercase'>{`// PROJECT OVERVIEW`}</p>
              <h3
                className={classNames(
                  'font-medium text-3xl md:text-5xl text-slate-800 uppercase tracking-wider'
                )}
              >
                {project.name}
              </h3>
              {/* <div className='border-b border-slate-400 w-[70%] absolute -left-5 -bottom-2'></div>
              <div className='border-b border-slate-400 w-[90%] absolute left-5 -bottom-4'></div> */}
            </Stack>
          </Stack>
          <Stack className='space-y-12'>
            <Stack className='items-center pb-8 space-y-1'>
              <Row className='w-full justify-center bg-slate-50'>
                <ProjectImage
                  alt={project.name}
                  src={project.image?.url}
                  hasEffects={false}
                />
              </Row>
              <p className='text-slate-400 text-sm'>banner</p>
            </Stack>
            <Stack>
              <ProjectOverviewItem
                number={1}
                name='DESCRIPTION'
                description={project.description}
              />
              {project.role ? (
                <ProjectOverviewItem
                  number={2}
                  name='ROLE'
                  description={project.role}
                />
              ) : null}
              {project.tags ? (
                <ProjectOverviewItem
                  number={project.role ? 3 : 2}
                  name='TECHNOLOGIES'
                  description={
                    <Row className='flex-wrap gap-2'>
                      {project.tags.map((tag, i) => (
                        <AppTag key={i} tag={tag} />
                      ))}
                    </Row>
                  }
                />
              ) : null}
            </Stack>

            <Stack className='space-y-12'>
              <h4 className='tracking-wider text-slate-800 text-xl'>CONTENT</h4>
              <AppReactMarkdown>{project.content}</AppReactMarkdown>
            </Stack>
          </Stack>
        </Container>
      </div>
    </AppModal>
  );
};

export default ProjectDetailsModal;

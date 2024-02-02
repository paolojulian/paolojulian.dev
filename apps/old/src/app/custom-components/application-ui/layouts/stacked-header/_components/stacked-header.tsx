import classNames from 'classnames';
import { FunctionComponent } from 'react';
import Container from './layouts/container';
import Navbar from './layouts/navbar';
import styles from './pattern.module.css';

export type StackedHeaderProps = {
  // no props
};

const StackedHeader: FunctionComponent<StackedHeaderProps> = () => {
  return (
    <div className='h-full w-full bg-neutral-50'>
      <Navbar />

      <main className='pt-14 h-full min-h-screen w-full flex flex-col'>
        <Container className='py-4 lg:py-8 flex-1 w-full flex flex-col'>
          <div className='pb-8'>
            <h1 className='text-3xl font-bold tracking-wide'>Dashboard</h1>
          </div>
          <div
            className={classNames(
              'border border-neutral-300 border-dashed rounded-xl overflow-hidden h-full w-full flex-1',
              styles.pattern
            )}
          ></div>
        </Container>
      </main>
    </div>
  );
};

export default StackedHeader;

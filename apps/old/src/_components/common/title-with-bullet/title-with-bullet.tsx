import Uppercase from '@/_components/common/typography/uppercase';
import Row from '@/_components/layouts/row';
import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

const TitleWithBullet: FunctionComponent<Props> = ({ title }) => {
  return (
    <Row className='items-center gap-2'>
      <div className='w-5 aspect-square bg-primary-300'></div>
      <Uppercase className='text-base lg:text-lg'>{title}</Uppercase>
    </Row>
  );
};

export default TitleWithBullet;

import Text from '@/_components/common/typography/text';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const GetInTouchBtn: FunctionComponent<Props> = () => {
  return (
    <Link href='/contact' className='text-new-white mt-4 font-medium text-lg'>
      <Text>Get in Touch</Text>
    </Link>
  );
};

export default GetInTouchBtn;

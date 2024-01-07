import Text from '@/_components/common/typography/text';
import React, { FunctionComponent } from 'react';

interface Props {
  text: string;
}

const TextHighlight: FunctionComponent<Props> = ({ text }) => {
  return (
    <Text as='strong' className='text-primary-400 font-medium'>
      {text}
    </Text>
  );
};

export default TextHighlight;

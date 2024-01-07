import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';

export type FormControlProps = {
  children: React.ReactNode;
  error?: string;
};

const FormControl: FunctionComponent<FormControlProps> = ({
  children,
  error = '',
}) => {
  return (
    <Stack className='space-y-1'>
      {children}
      <p className='text-sm text-red-400'>{error}</p>
    </Stack>
  );
};

export default FormControl;

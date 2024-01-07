import dayjs from 'dayjs';
import React, { FunctionComponent } from 'react';

export type AppCopyrightProps = {
  // no props
};

const AppCopyright: FunctionComponent<AppCopyrightProps> = () => {
  const year = dayjs().get('year');
  return <p>&copy; 2017-{year} Paolo Vincent Julian</p>;
};

export default AppCopyright;

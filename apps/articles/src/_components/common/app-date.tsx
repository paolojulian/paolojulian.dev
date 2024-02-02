import dayjs from 'dayjs';
import React, { FunctionComponent, useMemo } from 'react';

export type AppDateProps = {
  dateTime: string;
  format?: string;
};

const AppDate: FunctionComponent<AppDateProps> = ({
  dateTime,
  format = 'MMM DD, YYYY',
}) => {
  const formattedDate = useMemo(
    () => dayjs(dateTime).format(format),
    [dateTime, format]
  );
  return (
    <time className='uppercase' dateTime={formattedDate}>
      {formattedDate}
    </time>
  );
};

export default AppDate;

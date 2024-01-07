import React, { FunctionComponent } from 'react';

export type EmailIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const EmailIcon: FunctionComponent<EmailIconProps> = (props) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='20' height='20' rx='2' fill='#64748B' />
      <rect
        x='1.42871'
        y='1.42871'
        width='17.1429'
        height='17.1429'
        rx='5'
        fill='#64748B'
      />
      <path
        d='M3.14551 6.47228L10.0001 9.89914L16.8546 6.47228C16.8293 6.03552 16.6379 5.62498 16.3196 5.32476C16.0014 5.02454 15.5804 4.85734 15.1429 4.85742H4.85722C4.41972 4.85734 3.99875 5.02454 3.68052 5.32476C3.36229 5.62498 3.17088 6.03552 3.14551 6.47228Z'
        fill='#ECE8E1'
      />
      <path
        d='M16.8569 8.38672L9.99972 11.8153L3.14258 8.38672V13.4284C3.14258 13.8831 3.32319 14.3191 3.64468 14.6406C3.96617 14.9621 4.40221 15.1427 4.85686 15.1427H15.1426C15.5972 15.1427 16.0333 14.9621 16.3548 14.6406C16.6763 14.3191 16.8569 13.8831 16.8569 13.4284V8.38672Z'
        fill='#ECE8E1'
      />
    </svg>
  );
};

export default EmailIcon;

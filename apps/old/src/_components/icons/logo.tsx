import React, { FunctionComponent } from 'react';

interface Props extends React.SVGAttributes<SVGElement> {
  // no props
}

const Logo: FunctionComponent<Props> = (props) => {
  return (
    <svg
      width='21'
      height='42'
      viewBox='0 0 21 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.328125 42V0.75H11.2266C13.5078 0.75 15.3125 1.25781 16.6406 2.27344C17.9844 3.28906 18.9453 4.73438 19.5234 6.60938C20.1016 8.48438 20.3906 10.7188 20.3906 13.3125C20.3906 15.8125 20.1484 17.9922 19.6641 19.8516C19.1797 21.6953 18.3125 23.125 17.0625 24.1406C15.8281 25.1562 14.0703 25.6641 11.7891 25.6641H8.4375V42H0.328125ZM8.4375 18.2578H8.90625C10.4375 18.2578 11.375 17.8281 11.7188 16.9688C12.0625 16.1094 12.2344 14.8438 12.2344 13.1719C12.2344 11.6094 12.0625 10.4062 11.7188 9.5625C11.3906 8.70312 10.6016 8.27344 9.35156 8.27344H8.4375V18.2578Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Logo;

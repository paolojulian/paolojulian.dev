import React, { FunctionComponent, SVGAttributes } from 'react';

export type SearchIconProps = {
  // no props
} & SVGAttributes<SVGElement>;

const SearchIcon: FunctionComponent<SearchIconProps> = (props) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M21.9561 21.25L15.9561 15.25M17.9561 10.25C17.9561 11.1693 17.775 12.0795 17.4232 12.9288C17.0714 13.7781 16.5558 14.5497 15.9058 15.1997C15.2558 15.8498 14.4841 16.3654 13.6348 16.7172C12.7856 17.0689 11.8753 17.25 10.9561 17.25C10.0368 17.25 9.12655 17.0689 8.27727 16.7172C7.42799 16.3654 6.65632 15.8498 6.00631 15.1997C5.3563 14.5497 4.84068 13.7781 4.4889 12.9288C4.13712 12.0795 3.95605 11.1693 3.95605 10.25C3.95605 8.39348 4.69355 6.61301 6.00631 5.30025C7.31906 3.9875 9.09954 3.25 10.9561 3.25C12.8126 3.25 14.593 3.9875 15.9058 5.30025C17.2186 6.61301 17.9561 8.39348 17.9561 10.25Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SearchIcon;

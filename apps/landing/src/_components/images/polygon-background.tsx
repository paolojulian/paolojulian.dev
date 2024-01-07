import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

interface Props {
  className?: string;
}

const PolygonBackground: FunctionComponent<Props> = ({ className }) => {
  return (
    <svg
      width='496'
      height='400'
      viewBox='0 0 496 400'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={classNames(
        'fill-new-highlight aspect-[496/400] w-[244px] h-[241px] md:w-[336px] md:h-[261px] lg:w-[496px] lg:h-[400px]',
        className
      )}
    >
      <rect
        x='421.306'
        y='-232'
        width='78.6923'
        height='555.223'
        rx='39.3461'
        transform='rotate(43.2424 421.306 -232)'
        fill='#A3A3A3'
      />
      <rect
        x='215.732'
        y='-62.084'
        width='18.1891'
        height='227.318'
        rx='9.09453'
        transform='rotate(43.2424 215.732 -62.084)'
        fill='#A3A3A3'
      />
      <rect
        x='506.251'
        y='218'
        width='18.1891'
        height='98.1641'
        rx='9.09453'
        transform='rotate(43.2424 506.251 218)'
        fill='#A3A3A3'
      />
      <rect
        x='516.306'
        y='-221'
        width='63'
        height='469'
        rx='31.5'
        transform='rotate(43.2424 516.306 -221)'
        fill='#A3A3A3'
      />
      <rect
        x='283.248'
        y='190'
        width='31.2275'
        height='152.168'
        rx='15.6138'
        transform='rotate(43.2424 283.248 190)'
        fill='#A3A3A3'
      />
      <rect
        x='528.248'
        y='236'
        width='37.3301'
        height='152.168'
        rx='18.665'
        transform='rotate(43.2424 528.248 236)'
        fill='#A3A3A3'
      />
      <rect
        x='634.614'
        y='-207.543'
        width='43.3576'
        height='469'
        rx='21.6788'
        transform='rotate(43.2424 634.614 -207.543)'
        fill='#A3A3A3'
      />
      <rect
        x='604.306'
        y='-237'
        width='43.3576'
        height='469'
        rx='21.6788'
        transform='rotate(43.2424 604.306 -237)'
        fill='#A3A3A3'
      />
      <rect
        x='283.251'
        y='134'
        width='18.1891'
        height='98.1641'
        rx='9.09453'
        transform='rotate(43.2424 283.251 134)'
        fill='#A3A3A3'
      />
      <rect
        x='641.306'
        y='-134'
        width='63'
        height='469'
        rx='31.5'
        transform='rotate(43.2424 641.306 -134)'
        fill='#A3A3A3'
      />
      <rect
        x='714.306'
        y='-152'
        width='63'
        height='469'
        rx='31.5'
        transform='rotate(43.2424 714.306 -152)'
        fill='#A3A3A3'
      />
      <rect
        x='620.306'
        y='-2'
        width='63'
        height='384.676'
        rx='31.5'
        transform='rotate(43.2424 620.306 -2)'
        fill='#A3A3A3'
      />
      <rect
        x='149.251'
        y='-31'
        width='18.1891'
        height='98.1641'
        rx='9.09453'
        transform='rotate(43.2424 149.251 -31)'
        fill='#A3A3A3'
      />
    </svg>
  );
};

export default PolygonBackground;

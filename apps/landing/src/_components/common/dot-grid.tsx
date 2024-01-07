import React, { FunctionComponent } from 'react';

export type DotGridProps = {
  gridGap: number;
  dotColor: string;
  dotSize?: number;
};

const DotGrid: FunctionComponent<DotGridProps> = ({
  gridGap,
  dotColor,
  dotSize = 5,
}) => {
  const gridSize = 100; // Number of dots per row and column

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize}, ${dotSize}px)`,
    gridGap: gridGap,
  };

  const dotStyle = {
    width: dotSize,
    height: dotSize,
    borderRadius: '50%',
    backgroundColor: dotColor,
  };

  return (
    <div style={gridStyle}>
      {Array.from({ length: gridSize * gridSize }).map((_, index) => (
        <div key={index} style={dotStyle}></div>
      ))}
    </div>
  );
};

export default DotGrid;

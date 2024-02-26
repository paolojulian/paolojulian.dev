import {
  GUITAR_FRETBOARD_BASE_HEIGHT,
  GUITAR_FRETBOARD_BASE_X_PADDING,
} from '@/app/note-trainer/_components/guitar-fretboard/guitar-fretboard-base';
import colors from 'tailwindcss/colors';

interface Props {
  containerWidth: number;
  containerHeight: number;
  startFret: number;
  endFret: number;
}

const FIRST_FRET_COLOR = '#FEF3C7';
const FRET_COLOR = colors.black;
export const GUITAR_FRET_NUMBER_HEIGHT = 32;

export default function GuitarFretboardFrets({
  containerHeight,
  containerWidth,
  startFret,
  endFret,
}: Props) {
  const fretCount = endFret - startFret + 1;
  const width = containerWidth - GUITAR_FRETBOARD_BASE_X_PADDING * 2;

  return [...Array(fretCount)].map((_, index) => {
    const fretNumber = startFret + index;
    const fretPositionX = width / fretCount;
    const lineX = GUITAR_FRETBOARD_BASE_X_PADDING + fretPositionX * index;
    const textX =
      GUITAR_FRETBOARD_BASE_X_PADDING + fretPositionX * (index + 0.5);

    return (
      <g key={fretNumber}>
        <line
          x1={lineX}
          y1={GUITAR_FRET_NUMBER_HEIGHT}
          x2={lineX}
          y2={containerHeight}
          stroke={index === 0 ? FIRST_FRET_COLOR : FRET_COLOR}
          strokeWidth={index === 0 ? 8 : 5}
        />
        <text x={textX} y={0} fontSize='12' stroke='white' textAnchor='middle'>
          {fretNumber}
        </text>
      </g>
    );
  });
}

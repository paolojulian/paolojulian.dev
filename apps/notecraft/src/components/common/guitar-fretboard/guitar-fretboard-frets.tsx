import { GUITAR_FRETBOARD_BASE_X_PADDING } from './guitar-fretboard-base';
import colors from 'tailwindcss/colors';

interface Props {
  containerWidth: number;
  containerHeight: number;
  startFret: number;
  endFret: number;
}

const FIRST_FRET_COLOR = '#FEF3C7';
const FRET_COLOR = colors.black;
const TEXT_COLOR = '#A3A3A3';
const TEXT_BACKGROUND_COLOR = '#A3A3A34D';
export const GUITAR_FRET_NUMBER_HEIGHT = 43;

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

    const fretColor =
      index === 0 && fretNumber === 1 ? FIRST_FRET_COLOR : FRET_COLOR;
    const fretWidth = index === 0 && fretNumber === 1 ? 8 : 5;

    return (
      <g key={fretNumber}>
        <line
          x1={lineX}
          y1={GUITAR_FRET_NUMBER_HEIGHT}
          x2={lineX}
          y2={containerHeight}
          stroke={fretColor}
          strokeWidth={fretWidth}
        />

        <g id={`fretNumber_${fretNumber}`}>
          <rect
            x={textX - 16}
            width='32'
            height='32'
            rx='16.5'
            fill={TEXT_BACKGROUND_COLOR}
            fillOpacity='0.3'
          />
          <text
            x={textX}
            y={21}
            fontSize='14'
            fontFamily='inherit'
            fill={TEXT_COLOR}
            textAnchor='middle'
          >
            {fretNumber}
          </text>
        </g>
      </g>
    );
  });
}

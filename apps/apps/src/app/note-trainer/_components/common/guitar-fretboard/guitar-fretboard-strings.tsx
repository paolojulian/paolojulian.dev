import {
  GUITAR_FRETBOARD_BASE_HEIGHT,
  GUITAR_FRETBOARD_BASE_X_PADDING,
} from '@/app/note-trainer/_components/common/guitar-fretboard/guitar-fretboard-base';
import { String } from '@/app/note-trainer/_types/_note-trainer.types';
import { Fragment } from 'react';

interface Props {
  containerWidth: number;
}

const STRING_COLOR = '#FCE6CD';
export const STRING_HEIGHT = 18;
export const GUITAR_FRET_NUMBER_HEIGHT = 32;

export default function GuitarFretboardStrings({ containerWidth }: Props) {
  // Mapping string labels to their corresponding index
  const stringIndex: Record<String, number> = {
    'E-low': 5,
    A: 4,
    D: 3,
    G: 2,
    B: 1,
    'E-high': 0,
  };
  const stringNames = Object.keys(stringIndex).reverse();
  const width = containerWidth - GUITAR_FRETBOARD_BASE_X_PADDING + 3.5;
  const yPadding = GUITAR_FRET_NUMBER_HEIGHT + 20;

  return stringNames.map((_, index) => (
    <Fragment key={index}>
      <line
        x1={GUITAR_FRETBOARD_BASE_X_PADDING}
        y1={STRING_HEIGHT * index + yPadding}
        x2={width}
        y2={STRING_HEIGHT * index + yPadding}
        stroke={STRING_COLOR}
        strokeWidth={2 + index * 0.35}
      />
    </Fragment>
  ));
}

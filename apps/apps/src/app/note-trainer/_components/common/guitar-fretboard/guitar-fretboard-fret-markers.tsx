import FretMarker from '@/app/note-trainer/_components/common/guitar-fretboard/fret-marker';
import {
  GUITAR_FRETBOARD_BASE_HEIGHT,
  GUITAR_FRETBOARD_BASE_X_PADDING,
} from '@/app/note-trainer/_components/common/guitar-fretboard/guitar-fretboard-base';
import { String } from '@/app/note-trainer/_types/_note-trainer.types';
import { Fragment } from 'react';

interface Props {
  containerWidth: number;
  startFret: number;
  fretCount: number;
}

const FRETS_WITH_MARKER = [3, 5, 7, 9, 12, 15, 17, 19, 21];

const STRING_HEIGHT = GUITAR_FRETBOARD_BASE_HEIGHT / 6;
export const GUITAR_FRET_NUMBER_HEIGHT = 32;

export default function GuitarFretboardFretMarkers({
  containerWidth,
  startFret,
  fretCount,
}: Props) {
  // Mapping string labels to their corresponding index
  const stringIndex: Record<String, number> = {
    'E-low': 5,
    A: 4,
    D: 3,
    G: 2,
    B: 1,
    'E-high': 0,
  };

  return FRETS_WITH_MARKER.map((fretMarker) => {
    const adjustedFret = fretMarker - startFret + 1;
    const markerX =
      GUITAR_FRETBOARD_BASE_X_PADDING +
      ((containerWidth - GUITAR_FRETBOARD_BASE_X_PADDING * 2) / fretCount) *
        (adjustedFret - 0.5);

    const isWithinFretboard =
      markerX >= GUITAR_FRETBOARD_BASE_X_PADDING &&
      markerX <=
        GUITAR_FRETBOARD_BASE_X_PADDING +
          containerWidth -
          GUITAR_FRETBOARD_BASE_X_PADDING * 2;

    // Check if the marker position is within the fretboard width
    if (isWithinFretboard) {
      if (fretMarker === 12) {
        // Display two markers for the 12th fret on B and A strings
        return (
          <Fragment key={`${fretMarker}-double`}>
            <FretMarker
              x={markerX}
              y={
                STRING_HEIGHT +
                stringIndex['B'] * STRING_HEIGHT +
                GUITAR_FRET_NUMBER_HEIGHT
              }
            />
            <FretMarker
              x={markerX}
              y={
                STRING_HEIGHT +
                stringIndex['A'] * STRING_HEIGHT +
                GUITAR_FRET_NUMBER_HEIGHT
              }
            />
          </Fragment>
        );
      } else {
        // Display a single marker for other frets and strings
        return (
          <FretMarker
            key={fretMarker}
            x={markerX}
            y={
              GUITAR_FRET_NUMBER_HEIGHT + GUITAR_FRETBOARD_BASE_HEIGHT / 2 + 10
            }
          />
        );
      }
    }

    return null; // Do not render the marker if it overflows
  });
}

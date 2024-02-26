'use client';
import FretMarker from '@/app/note-trainer/_components/guitar-fretboard/fret-marker';
import GuitarFretboardBase, {
  GUITAR_FRETBOARD_BASE_HEIGHT,
} from '@/app/note-trainer/_components/guitar-fretboard/guitar-fretboard-base';
import GuitarFretboardFrets, {
  GUITAR_FRET_NUMBER_HEIGHT,
} from '@/app/note-trainer/_components/guitar-fretboard/guitar-fretboard-frets';
import GuitarFretboardStrings from '@/app/note-trainer/_components/guitar-fretboard/guitar-fretboard-strings';
import { String } from '@/app/note-trainer/_note-trainer.types';
import React from 'react';

interface Props {
  note: string;
  fretNumber: number;
  string: String;
}

// Fret markers to be displayed
const FRETS_WITH_MARKER = [3, 5, 7, 9, 12, 15, 17, 19, 21];

const STRING_HEIGHT = 18;

const GuitarFretboard: React.FC<Props> = ({ note, fretNumber, string }) => {
  const startFret = Math.max(1, fretNumber - 2);
  const endFret = startFret + 4;
  const fretCount = endFret - startFret + 1;

  const svgWidth = fretCount * 64 + 100; // Adjusted for dynamic fret width
  const svgHeight = GUITAR_FRETBOARD_BASE_HEIGHT + GUITAR_FRET_NUMBER_HEIGHT;

  // Mapping string labels to their corresponding index
  const stringIndex: Record<String, number> = {
    'E-low': 5,
    A: 4,
    D: 3,
    G: 2,
    B: 1,
    'E-high': 0,
  };

  return (
    <div>
      <svg width={svgWidth} height={svgHeight}>
        {/* Fretboard */}
        <GuitarFretboardBase containerWidth={svgWidth} />

        {/* Frets */}
        <GuitarFretboardFrets
          containerHeight={svgHeight}
          containerWidth={svgWidth}
          endFret={endFret}
          startFret={startFret}
        />

        {/* Fret markers */}
        {FRETS_WITH_MARKER.map((fretMarker) => {
          const adjustedFret = fretMarker - startFret + 1;
          const markerX =
            50 + ((svgWidth - 100) / fretCount) * (adjustedFret - 0.5);

          // Check if the marker position is within the fretboard width
          if (markerX >= 50 && markerX <= 50 + svgWidth - 100) {
            if (fretMarker === 12) {
              // Display two markers for the 12th fret on B and A strings
              return (
                <React.Fragment key={`${fretMarker}-double`}>
                  <FretMarker
                    x={markerX}
                    y={STRING_HEIGHT + stringIndex['B'] * STRING_HEIGHT}
                  />
                  <FretMarker
                    x={markerX}
                    y={STRING_HEIGHT + stringIndex['A'] * STRING_HEIGHT}
                  />
                </React.Fragment>
              );
            } else {
              // Display a single marker for other frets and strings
              return <FretMarker key={fretMarker} x={markerX} y={70 - 6.5} />;
            }
          }

          return null; // Do not render the marker if it overflows
        })}

        {/* Strings */}
        <GuitarFretboardStrings containerWidth={svgWidth} />

        {/* Highlighted note */}
        {note && (
          <circle
            cx={
              ((fretNumber - startFret + 0.5) * (svgWidth - 100)) / fretCount +
              50
            }
            cy={STRING_HEIGHT + stringIndex[string] * STRING_HEIGHT}
            r='10'
            fill='red'
          />
        )}
      </svg>
    </div>
  );
};

export default GuitarFretboard;

'use client';
import GuitarFretboardBase, {
  GUITAR_FRETBOARD_BASE_HEIGHT,
} from './guitar-fretboard-base';
import GuitarFretboardFretMarkers from './guitar-fretboard-fret-markers';
import GuitarFretboardFrets, {
  GUITAR_FRET_NUMBER_HEIGHT,
} from './guitar-fretboard-frets';
import GuitarFretboardHighlightedNote from './guitar-fretboard-highlighted-note';
import GuitarFretboardStrings from './guitar-fretboard-strings';
import { String } from '../../../types/note-trainer.types';
import React from 'react';

interface Props {
  note: string;
  fretNumber: number;
  string: String;
}


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
        <GuitarFretboardFretMarkers
          containerWidth={svgWidth}
          startFret={startFret}
          fretCount={fretCount}
        />

        {/* Strings */}
        <GuitarFretboardStrings containerWidth={svgWidth} />

        {/* Highlighted note */}
        {note && (
          <GuitarFretboardHighlightedNote
            containerWidth={svgWidth}
            fretCount={fretCount}
            fretNumber={fretNumber}
            startFret={startFret}
            stringNumber={stringIndex[string]}
          />
        )}
      </svg>
    </div>
  );
};

export default GuitarFretboard;

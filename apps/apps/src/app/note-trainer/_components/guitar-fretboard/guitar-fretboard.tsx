import FretMarker from '@/app/note-trainer/_components/guitar-fretboard/fret-marker';
import { String } from '@/app/note-trainer/_note-trainer.types';
import React from 'react';

interface Props {
  note: string;
  fretNumber: number;
  string: String;
}

// Fret markers to be displayed
const fretMarkers = [3, 5, 7, 9, 12, 15, 17, 19, 21];

const GuitarFretboard: React.FC<Props> = ({ note, fretNumber, string }) => {
  const startFret = Math.max(1, fretNumber - 2);
  const endFret = startFret + 4;
  const fretCount = endFret - startFret + 1;
  const stringCount = 6;

  const svgWidth = fretCount * 60 + 100; // Adjusted for dynamic fret width
  const svgHeight = (stringCount - 1) * 20 + 20;

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
      <svg width={svgWidth} height={200}>
        {/* Fretboard */}
        <rect
          x='50'
          y='20'
          width={svgWidth - 100}
          height={svgHeight - 20}
          fill='#D2B48C'
          stroke='black'
          strokeWidth='2'
        />

        {/* Frets */}
        {[...Array(fretCount)].map((_, index) => {
          const fretNumber = startFret + index;
          return (
            <g key={fretNumber}>
              <line
                x1={50 + ((svgWidth - 100) / fretCount) * index}
                y1='20'
                x2={50 + ((svgWidth - 100) / fretCount) * index}
                y2={svgHeight}
                stroke='black'
                strokeWidth='2'
              />
              <text
                x={50 + ((svgWidth - 100) / fretCount) * (index + 0.5)}
                y='180'
                fontSize='12'
                textAnchor='middle'
              >
                {fretNumber}
              </text>
            </g>
          );
        })}

        {/* Fret markers */}
        {fretMarkers.map((fretMarker) => {
          const adjustedFret = fretMarker - startFret + 1;
          const markerX =
            50 + ((svgWidth - 100) / fretCount) * (adjustedFret - 0.5);

          // Check if the marker position is within the fretboard width
          if (markerX >= 50 && markerX <= 50 + svgWidth - 100) {
            if (fretMarker === 12) {
              // Display two markers for the 12th fret on B and A strings
              return (
                <React.Fragment key={`${fretMarker}-double`}>
                  <FretMarker x={markerX} y={20 + stringIndex['B'] * 20} />
                  <FretMarker x={markerX} y={20 + stringIndex['A'] * 20} />
                </React.Fragment>
              );
            } else {
              // Display a single marker for other frets and strings
              return (
                <circle
                  key={fretMarker}
                  cx={markerX}
                  cy='70'
                  r='7'
                  fill='black'
                  stroke='black'
                  strokeWidth='2'
                />
              );
            }
          }

          return null; // Do not render the marker if it overflows
        })}

        {/* Strings */}
        {[...Array(stringCount)].map((_, str) => (
          <line
            key={str}
            x1='50'
            y1={20 + 20 * str}
            x2={50 + svgWidth - 100}
            y2={20 + 20 * str}
            stroke='black'
            strokeWidth='2'
          />
        ))}

        {/* Highlighted note */}
        {note && (
          <circle
            cx={
              ((fretNumber - startFret + 0.5) * (svgWidth - 100)) / fretCount +
              50
            }
            cy={20 + stringIndex[string] * 20}
            r='10'
            fill='red'
          />
        )}
      </svg>
    </div>
  );
};

export default GuitarFretboard;

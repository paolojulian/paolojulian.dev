'use client';
import FretMarker from '@/app/note-trainer/_components/guitar-fretboard/fret-marker';
import { String } from '@/app/note-trainer/_note-trainer.types';
import React from 'react';

interface Props {
  note: string;
  fretNumber: number;
  string: String;
}

// Fret markers to be displayed
const FRETS_WITH_MARKER = [3, 5, 7, 9, 12, 15, 17, 19, 21];

const NECK_COLOR = '#d4a853';

const STRING_HEIGHT = 18;

const GuitarFretboard: React.FC<Props> = ({ note, fretNumber, string }) => {
  const startFret = Math.max(1, fretNumber - 2);
  const endFret = startFret + 4;
  const fretCount = endFret - startFret + 1;
  const stringCount = 6;

  const svgWidth = fretCount * 64 + 100; // Adjusted for dynamic fret width
  const svgHeight = (stringCount - 1) * STRING_HEIGHT + STRING_HEIGHT;


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

  return (
    <div>
      <svg width={svgWidth} height={200}>
        {/* Fretboard */}
        <rect
          x='50'
          y={STRING_HEIGHT}
          width={svgWidth - 100}
          height={svgHeight - STRING_HEIGHT}
          fill={NECK_COLOR}
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
                y1={STRING_HEIGHT}
                x2={50 + ((svgWidth - 100) / fretCount) * index}
                y2={svgHeight}
                stroke='black'
                strokeWidth='2'
              />
              <text
                x={50 + ((svgWidth - 100) / fretCount) * (index + 0.5)}
                y={STRING_HEIGHT - 8}
                fontSize='12'
                textAnchor='middle'
              >
                {fretNumber}
              </text>
            </g>
          );
        })}

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
              return <FretMarker key={fretMarker} x={markerX} y={70} />;
            }
          }

          return null; // Do not render the marker if it overflows
        })}
        {/* Strings */}
        {stringNames.map((stringName, str) => (
          <React.Fragment key={str}>
            <line
              x1='50'
              y1={STRING_HEIGHT + STRING_HEIGHT * str}
              x2={50 + svgWidth - 100}
              y2={STRING_HEIGHT + STRING_HEIGHT * str}
              stroke='black'
              strokeWidth='2'
            />
            <text
              x='40'
              y={STRING_HEIGHT + STRING_HEIGHT * (str + 0.25)}
              fontSize='12'
              textAnchor='end'
            >
              {stringName.charAt(0)}
            </text>
          </React.Fragment>
        ))}

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

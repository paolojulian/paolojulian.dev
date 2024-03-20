import { Note } from './note-trainer.types';

export type Scale =
  | 'C major'
  | 'D major'
  | 'E major'
  | 'F major'
  | 'G major'
  | 'A major'
  | 'B major'
  | 'F# major'
  | 'C# major'
  | 'A# major'
  | 'D# major'
  | 'G# major'
  | 'Chromatic';

export const MAJOR_SCALES: Record<Scale, Note[]> = Object.freeze({
  'C major': [Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B],
  'D major': [Note.D, Note.E, Note['F#'], Note.G, Note.A, Note.B, Note['C#']],
  'E major': [
    Note.E,
    Note['F#'],
    Note['G#'],
    Note.A,
    Note.B,
    Note['C#'],
    Note['D#'],
  ],
  'F major': [Note.F, Note.G, Note.A, Note['A#'], Note.C, Note.D, Note.E],
  'G major': [Note.G, Note.A, Note.B, Note.C, Note.D, Note.E, Note['F#']],
  'A major': [
    Note.A,
    Note.B,
    Note['C#'],
    Note.D,
    Note.E,
    Note['F#'],
    Note['G#'],
  ],
  'B major': [
    Note.B,
    Note['C#'],
    Note['D#'],
    Note.E,
    Note['F#'],
    Note['G#'],
    Note['A#'],
  ],
  'F# major': [
    Note['F#'],
    Note['G#'],
    Note['A#'],
    Note.B,
    Note['C#'],
    Note['D#'],
    Note.F,
  ],
  'C# major': [Note.Db, Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.C],
  'A# major': [Note['Bb'], Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.A],
  'D# major': [Note.Eb, Note.F, Note.G, Note.Ab, Note['Bb'], Note.C, Note.D],
  'G# major': [Note.Ab, Note['Bb'], Note.C, Note.Db, Note.Eb, Note.F, Note.G],
  Chromatic: [
    Note.C,
    Note['C#'],
    Note.D,
    Note['D#'],
    Note.E,
    Note.F,
    Note['F#'],
    Note.G,
    Note['G#'],
    Note.A,
    Note['A#'],
    Note.B,
  ],
});

export function getMajorScaleNotes(scale: Scale) {
  return MAJOR_SCALES[scale];
}

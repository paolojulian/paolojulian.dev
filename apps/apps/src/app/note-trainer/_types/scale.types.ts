import { Note } from '@/app/note-trainer/_types/_note-trainer.types';

export type Scale =
  | 'C major'
  | 'D major'
  | 'E major'
  | 'F major'
  | 'G major'
  | 'A major'
  | 'B major'
  | 'F# major'
  | 'Db major'
  | 'Bb major'
  | 'Eb major'
  | 'Ab major';

export const MAJOR_SCALES: Record<Scale, Note[]> = {
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
  'Db major': [Note.Db, Note.Eb, Note.F, Note.Gb, Note.Ab, Note.Bb, Note.C],
  'Bb major': [Note['Bb'], Note.C, Note.D, Note.Eb, Note.F, Note.G, Note.A],
  'Eb major': [Note.Eb, Note.F, Note.G, Note.Ab, Note['Bb'], Note.C, Note.D],
  'Ab major': [Note.Ab, Note['Bb'], Note.C, Note.Db, Note.Eb, Note.F, Note.G],
};

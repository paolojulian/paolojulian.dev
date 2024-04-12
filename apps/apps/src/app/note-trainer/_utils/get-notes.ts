import { Note } from '@/app/note-trainer/_types/_note-trainer.types';

export function getNotes(): Note[] {
  return [
    Note.E,
    Note.F,
    Note['F#'],
    Note.G,
    Note['G#'],
    Note.A,
    Note['A#'],
    Note.B,
    Note.C,
    Note['C#'],
    Note.D,
    Note['D#'],
  ];
}

import { ALL_TONES, Tone } from '@/types/note-trainer.types';
import { Scale, getMajorScaleNotes } from '@/types/scale.types';

export function generateRandomNotePerScale(scale: Scale) {
  const scaleNotes = getMajorScaleNotes(scale);
  const randomIndex = Math.floor(Math.random() * scaleNotes.length);

  return scaleNotes[randomIndex];
}

export function generateRandomTone(): Tone {
  const randomIndex = Math.floor(Math.random() * ALL_TONES.length);
  return ALL_TONES[randomIndex];
}

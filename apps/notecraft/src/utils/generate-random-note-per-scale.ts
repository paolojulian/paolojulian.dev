import { Scale, getMajorScaleNotes } from '@/types/scale.types';

export function generateRandomNotePerScale(scale: Scale) {
  const scaleNotes = getMajorScaleNotes(scale);
  const randomIndex = Math.floor(Math.random() * scaleNotes.length);

  return scaleNotes[randomIndex];
}

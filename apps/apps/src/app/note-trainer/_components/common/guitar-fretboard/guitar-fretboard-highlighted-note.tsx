import { GUITAR_FRETBOARD_BASE_X_PADDING } from '@/app/note-trainer/_components/common/guitar-fretboard/guitar-fretboard-base';
import { STRING_HEIGHT } from '@/app/note-trainer/_components/common/guitar-fretboard/guitar-fretboard-strings';

interface Props {
  containerWidth: number;
  fretCount: number;
  fretNumber: number;
  startFret: number;
  stringNumber: number;
}

export const GUITAR_FRET_NUMBER_HEIGHT = 32;
const NOTE_COLOR = '#FCE6CD';

export default function GuitarFretboardHighlightedNote({
  containerWidth,
  startFret,
  fretCount,
  fretNumber,
  stringNumber,
}: Props) {
  const neckWidth = containerWidth - GUITAR_FRETBOARD_BASE_X_PADDING * 2;
  const xPosition =
    ((fretNumber - startFret + 0.5) * neckWidth) / fretCount +
    GUITAR_FRETBOARD_BASE_X_PADDING;
  const yPosition =
    GUITAR_FRET_NUMBER_HEIGHT + STRING_HEIGHT * stringNumber + 20;

  return <circle cx={xPosition} cy={yPosition} r='10' fill={NOTE_COLOR} />;
}

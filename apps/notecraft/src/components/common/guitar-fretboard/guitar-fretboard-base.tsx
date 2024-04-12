import { GUITAR_FRET_NUMBER_HEIGHT } from './guitar-fretboard-frets';
import { STRING_HEIGHT } from './guitar-fretboard-strings';
import getAssetURL from '../../../utils/asset-map';

interface Props {
  containerWidth: number; // The total width of the svg
}

export const GUITAR_FRETBOARD_BASE_X_PADDING = 50;
export const GUITAR_FRETBOARD_BASE_HEIGHT = STRING_HEIGHT * 6;

export default function GuitarFretboardBase({ containerWidth }: Props) {
  const yPadding = GUITAR_FRET_NUMBER_HEIGHT;
  const y = yPadding;

  const x = GUITAR_FRETBOARD_BASE_X_PADDING;
  const width = containerWidth - x * 2;

  return (
    <image
      x={x}
      y={y}
      width={width}
      height={GUITAR_FRETBOARD_BASE_HEIGHT}
      xlinkHref={getAssetURL('neck-wood')}
      preserveAspectRatio='none'
    />
  );
}

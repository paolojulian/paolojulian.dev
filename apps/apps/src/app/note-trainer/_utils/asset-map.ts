const ASSET_DIRECTORY = '/assets';

type AssetNames =
  | 'ear-training'
  | 'fretboard-training'
  | 'random-note'
  | 'triads'
  | 'neck-wood'
  | 'welcome-screen';

const AssetURLMap: Record<AssetNames, string> = {
  'ear-training': 'ear-training.png',
  'fretboard-training': 'fretboard-training.png',
  'random-note': 'random-note.png',
  'neck-wood': 'neck-wood.png',
  'welcome-screen': 'welcome-screen-bg.png',
  triads: 'triads.png',
};

export default function getAssetURL(name: AssetNames) {
  return `${ASSET_DIRECTORY}/${AssetURLMap[name]}`;
}

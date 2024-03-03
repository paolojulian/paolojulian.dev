export type TriadName =
  | 'major'
  | 'minor'
  | 'diminished'
  | 'augmented'
  | 'major 7th'
  | 'minor 7th'
  | 'dominant 7th'
  | 'minor 9th'
  | 'major 9th';

export interface TriadTypes {
  [key: string]: {
    name: TriadName;
    intervals: number[];
  };
}

export const SCALE_TRIAD_NAMES: Record<number, TriadName[]> = {
  1: ['major', 'major 7th', 'major 9th'],
  2: ['minor', 'minor 7th', 'minor 9th'],
  3: ['minor', 'minor 7th', 'minor 9th'],
  4: ['major', 'major 7th', 'major 9th'],
  5: ['augmented', 'dominant 7th'],
  6: ['minor', 'minor 7th', 'minor 9th'],
  7: ['diminished'],
};

export const TRIAD_TYPES: TriadTypes = {
  major: { name: 'major', intervals: [0, 4, 7] },
  minor: { name: 'minor', intervals: [0, 3, 7] },
  diminished: { name: 'diminished', intervals: [0, 3, 6] },
  augmented: { name: 'augmented', intervals: [0, 4, 8] },
  'major 7th': { name: 'major 7th', intervals: [0, 4, 7, 11] },
  'minor 7th': { name: 'minor 7th', intervals: [0, 3, 7, 10] },
  'dominant 7th': { name: 'dominant 7th', intervals: [0, 4, 7, 10] },
  'minor 9th': { name: 'major 9th', intervals: [0, 3, 7, 11, 14] },
  'major 9th': { name: 'major 9th', intervals: [0, 4, 7, 11, 14] },
};

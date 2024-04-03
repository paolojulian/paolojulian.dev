export type TriadName =
  | 'major'
  | 'minor'
  | 'diminished'
  | 'augmented'
  | 'major 7th'
  | 'minor 7th'
  | 'relative minor 7th'
  | 'dominant 7th'
  | 'minor 9th'
  | 'third minor 9th'
  | 'relative minor 9th'
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
  3: ['minor', 'minor 7th', 'third minor 9th'],
  4: ['major', 'major 7th', 'major 9th'],
  5: ['augmented', 'dominant 7th'],
  6: ['minor', 'relative minor 7th', 'relative minor 9th'],
  7: ['diminished'],
};

export const TRIAD_TYPES: TriadTypes = {
  // minors
  minor: { name: 'minor', intervals: [0, 3, 7] },
  'minor 7th': { name: 'minor 7th', intervals: [0, 3, 7, 10] },
  'minor 9th': { name: 'major 9th', intervals: [0, 3, 7, 10, 14] },
  'third minor 9th': { name: 'major 9th', intervals: [0, 3, 7, 10, 13] },
  'relative minor 7th': {
    name: 'relative minor 7th',
    intervals: [0, 3, 7, 10],
  },
  'relative minor 9th': {
    name: 'relative minor 9th',
    intervals: [0, 3, 7, 10, 14],
  },

  // majors
  major: { name: 'major', intervals: [0, 4, 7] },
  'major 7th': { name: 'major 7th', intervals: [0, 4, 7, 11] },
  'major 9th': { name: 'major 9th', intervals: [0, 4, 7, 11, 14] },
  diminished: { name: 'diminished', intervals: [0, 3, 6] },
  augmented: { name: 'augmented', intervals: [0, 4, 7] },
  'dominant 7th': { name: 'dominant 7th', intervals: [0, 4, 7, 10] },
};

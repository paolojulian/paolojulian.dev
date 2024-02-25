// export type Note =
//   | 'C'
//   | 'C#'
//   | 'D'
//   | 'D#'
//   | 'E'
//   | 'F'
//   | 'F#'
//   | 'G'
//   | 'G#'
//   | 'A'
//   | 'A#'
//   | 'B';

export enum Note {
  C = 'C',
  'C#' = 'C#',
  D = 'D',
  'D#' = 'D#',
  E = 'E',
  F = 'F',
  'F#' = 'F#',
  G = 'G',
  'G#' = 'G#',
  A = 'A',
  'A#' = 'A#',
  B = 'B',
}

export type FretNumber =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22;

export type String = 'E-low' | 'A' | 'D' | 'G' | 'B' | 'E-high';

export type NoteLocation = {
  fretNumber: FretNumber;
  string: String;
  note: Note;
};

const strings: String[] = ['E-low', 'A', 'D', 'G', 'B', 'E-high'];

function getNoteLocations() {
  const noteLocations: NoteLocation[] = [];
  for (let fret = 0; fret <= 24; fret++) {
    for (const string of strings) {
      noteLocations.push({
        fretNumber: fret as FretNumber,
        string,
        note: calculateNoteForFretAndString(fret as FretNumber, string),
      });
    }
  }
  return noteLocations;
}

// Function to calculate note based on fret and string
function calculateNoteForFretAndString(fret: FretNumber, string: String): Note {
  const openStringNotes: Record<String, Note> = {
    'E-low': Note.E,
    A: Note.A,
    D: Note.D,
    G: Note.G,
    B: Note.B,
    'E-high': Note.E,
  };

  const openNote = openStringNotes[string];
  const notesInOrder = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
  ];

  const openNoteIndex = notesInOrder.indexOf(openNote);
  const noteIndex = (openNoteIndex + fret) % 12;

  return notesInOrder[noteIndex] as Note;
}

export const NOTE_LOCATIONS = getNoteLocations();

import { Note } from '@/app/note-trainer/_types/_note-trainer.types';
import { MAJOR_SCALES, Scale } from '@/app/note-trainer/_types/scale.types';
import {
  SCALE_TRIAD_NAMES,
  TRIAD_TYPES,
} from '@/app/note-trainer/_types/triad.types';

function getRandomElement<T>(array: T[]): T {
  // Helper function to get a random element from an array
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function generateTriadQuestion(scale: Scale) {
  // Get the root notes based on the selected scale
  const rootNotes = getScaleRootNotes(scale);

  // Randomly select a root note and triad type
  const rootNote = getRandomElement(rootNotes);

  // Generate the correct answer based on the selected root note and triad type
  const { triadName, triadNotes } = generateTriadNotes({ rootNote, scale });

  // Generate the question
  const noteTriadName = `${rootNote.split(' ')[0]} ${triadName}`;

  return {
    rootNote,
    noteTriadName,
    correctAnswer: triadNotes,
  };
}

function generateTriadNotes({
  rootNote,
  scale,
}: {
  rootNote: Note;
  scale: Scale;
}) {
  // 1. Get position of the rootNote on the scale
  const scaleNotes = MAJOR_SCALES[scale];
  const rootPosition = scaleNotes.indexOf(rootNote);

  // 2. Get the possible triad type based on the position
  const triadTypes = SCALE_TRIAD_NAMES[getScaleDegree(rootPosition + 1)];
  const triadName = getRandomElement(triadTypes);

  // 3. Get the note names
  const triadIntervals = TRIAD_TYPES[triadName].intervals;
  const triadNotes = triadIntervals.map((interval) =>
    getNoteName(rootNote, interval)
  );

  return { triadName, triadNotes };
}

// Helper function to get the scale degree
function getScaleDegree(position: number): number {
  const scaleDegrees = [1, 2, 3, 4, 5, 6, 7];

  return scaleDegrees[(position - 1) % 7];
}

function getNoteName(rootNote: Note, interval: number) {
  // Define an object mapping note names to their numerical representation
  const noteValues: any = {
    [Note.C]: 0,
    [Note['C#']]: 1,
    [Note.D]: 2,
    [Note['D#']]: 3,
    [Note.E]: 4,
    [Note.F]: 5,
    [Note['F#']]: 6,
    [Note.G]: 7,
    [Note['G#']]: 8,
    [Note.A]: 9,
    [Note['A#']]: 10,
    [Note.B]: 11,
  };

  // Calculate the numerical representation of the note based on the root note and interval
  const noteValue = (noteValues[rootNote] + interval) % 12;

  // Convert the numerical representation back to the note name
  const noteName = Object.keys(noteValues).find(
    (key) => noteValues[key] === noteValue
  );

  return noteName;
}

export function getScaleRootNotes(scale: Scale) {
  // Define an object mapping scales to their respective root notes
  const scaleRootNotes = MAJOR_SCALES;

  // Get the root notes for the selected scale
  return scaleRootNotes[scale];
}

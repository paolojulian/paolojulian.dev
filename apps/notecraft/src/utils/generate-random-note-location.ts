import { NOTE_LOCATIONS } from "../types/note-trainer.types";

  export const generateNoteLocation = () => {
    return Math.floor(Math.random() * NOTE_LOCATIONS.length - 1) + 1;
  }
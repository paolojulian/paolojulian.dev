import { NOTE_LOCATIONS } from "@/app/note-trainer/_note-trainer.types";

  export const generateNoteLocation = () => {
    return Math.floor(Math.random() * NOTE_LOCATIONS.length);
  }
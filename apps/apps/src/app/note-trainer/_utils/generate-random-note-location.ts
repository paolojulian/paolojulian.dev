import { NOTE_LOCATIONS } from "@/app/note-trainer/_types/_note-trainer.types";

  export const generateNoteLocation = () => {
    return Math.floor(Math.random() * NOTE_LOCATIONS.length - 1) + 1;
  }
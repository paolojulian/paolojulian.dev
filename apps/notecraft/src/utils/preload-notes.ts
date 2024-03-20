import { Note } from '@/types/note-trainer.types';
import { MAJOR_SCALES } from '@/types/scale.types';
import { ReactElement, useEffect, useState } from 'react';

type Tone = 'low' | 'mid' | 'high';

const allNotes = MAJOR_SCALES.Chromatic;
const allTones: Tone[] = ['low', 'mid', 'high'];

type Props = {
  children: ReactElement;
}
export default function PreloadNotes({ children }: Props) {
  const [preloadingComplete, setPreloadingComplete] = useState(false);

  useEffect(() => {
    const preloadPromises = allNotes.flatMap((note) => {
      return allTones.map((tone) => {
        return new Promise<void>((resolve) => {
          const audio = document.createElement('audio');
          audio.src = getMusicFile(note, tone);
          audio.preload = 'auto';
          audio.onloadeddata = () => {
            resolve();
          };
          audio.onerror = () => {
            console.error(`Error loading audio for note ${note}`);
            resolve(); // Resolve even if there's an error to prevent blocking
          };
          audio.load();
        });
      });
    });

    Promise.all(preloadPromises).then(() => {
      setPreloadingComplete(true);
    });
  }, []);

  if (!preloadingComplete) {
    return;
  }

  return children
}

function getMusicFile(note: Note, tone: Tone) {
  const basePath = '/notes';
  const fileName = `${note.charAt(0).toUpperCase()}-${tone}.mp3`; // Assuming music files are in MP3 format
  return `${basePath}/${fileName}`;
}

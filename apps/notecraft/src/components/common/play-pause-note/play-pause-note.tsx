'use client';
import { Note, Tone } from '@/types/note-trainer.types';
import cn from '@repo/ui/utils/cn';
import { useEffect, useRef, useState } from 'react';
import styles from './play-pause-note.module.css';
import { getMusicFilePath } from '@/utils/preload-notes';

type Props = {
  note: Note;
  tone: Tone;
};

export default function PlayPauseNote({ note, tone }: Props) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioPlaying = () => {
    setIsAudioPlaying(true);
  };

  const handleAudioEnded = () => {
    setIsAudioPlaying(false);
  };

  const handleClick = () => {
    setIsAudioPlaying(false);
    setTimeout(() => {
      audioRef.current?.load();
      audioRef.current?.play();
    }, 0);
  };

  return (
    <>
      <audio
        ref={audioRef}
        muted={false}
        autoPlay
        onPlay={handleAudioPlaying}
        onEnded={handleAudioEnded}
      >
        <source src={getMusicFilePath(note, tone)} type='audio/mp3' />
      </audio>
      <div className={styles.donut} onClick={handleClick} role='button'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='220px'
          height='220px'
          xmlSpace='preserve'
        >
          <g transform='translate(110, 110)'>
            {/* Loading background */}
            <circle
              r='100'
              className={cn(
                styles.donut__circle,
                styles['donut__circle--back']
              )}
            />
            {/* Loading State */}
            <circle
              r='100'
              className={cn(
                styles.donut__circle,
                styles['donut__circle--front'],
                {
                  [styles['isPlaying']]: isAudioPlaying,
                }
              )}
            />

            {/* Middle Circle */}
            <circle r='70.5' fill='#A3A3A3' fillOpacity='0.15' />

            {/* Inner Circle */}
            <circle r='37.5' fill='#FF928B' />
          </g>

          {/* Pause */}
          {isAudioPlaying && (
            <g transform='translate(72.5, 75)' clipPath='url(#clip0_117_160)'>
              <path
                d='M30 22C28.9391 22 27.9217 22.4214 27.1716 23.1716C26.4214 23.9217 26 24.9391 26 26V45.4286C26 46.4894 26.4214 47.5069 27.1716 48.257C27.9217 49.0071 28.9391 49.4286 30 49.4286C31.0609 49.4286 32.0783 49.0071 32.8284 48.257C33.5786 47.5069 34 46.4894 34 45.4286V26C34 24.9391 33.5786 23.9217 32.8284 23.1716C32.0783 22.4214 31.0609 22 30 22Z'
                fill='#FAFAFA'
              />
              <path
                d='M43 22C41.9391 22 40.9217 22.4214 40.1716 23.1716C39.4214 23.9217 39 24.9391 39 26V45.4286C39 46.4894 39.4214 47.5068 40.1716 48.257C40.9217 49.0071 41.9391 49.4286 43 49.4286C44.0609 49.4286 45.0783 49.0071 45.8284 48.257C46.5786 47.5068 47 46.4894 47 45.4286V26C47 24.9391 46.5786 23.9217 45.8284 23.1716C45.0783 22.4214 44.0609 22 43 22Z'
                fill='#FAFAFA'
              />
            </g>
          )}

          {/* Play */}
          {!isAudioPlaying && (
            <g transform='translate(100, 95)'>
              <path
                d='M21.4914 9.77987L9.77261 1.18676C8.85731 0.516518 7.77428 0.112821 6.64359 0.0204153C5.51289 -0.0719901 4.37869 0.150506 3.36671 0.663241C2.35473 1.17598 1.50449 1.95892 0.910236 2.9253C0.315985 3.89167 0.00093518 5.00372 7.41347e-06 6.13818V23.333C-0.00175752 24.4686 0.311645 25.5824 0.90533 26.5504C1.49902 27.5184 2.34969 28.3027 3.36266 28.8159C4.37564 29.3292 5.51117 29.5512 6.64286 29.4574C7.77455 29.3636 8.858 28.9575 9.77261 28.2844L21.4914 19.6913C22.269 19.1207 22.9013 18.375 23.3371 17.5145C23.7729 16.6541 24 15.7032 24 14.7387C24 13.7742 23.7729 12.8232 23.3371 11.9628C22.9013 11.1024 22.269 10.3567 21.4914 9.78601V9.77987Z'
                fill='#FAFAFA'
              />
            </g>
          )}

          <defs>
            <clipPath id='clip0_117_160'>
              <rect
                width='21'
                height='27.4286'
                fill='white'
                transform='translate(26 22)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}

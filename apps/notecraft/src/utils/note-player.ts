import { Note, Tone } from '@/types/note-trainer.types';

export default class NotePlayer {
  private note: Note;
  private tone: Tone;
  private audioContext: AudioContext;
  private currentSource: AudioBufferSourceNode | null;

  constructor(note: Note, tone: Tone) {
    this.note = note;
    this.tone = tone;
    this.audioContext = new AudioContext();
    this.currentSource = null;
  }

  async playNote() {
    // Stop the previously playing note
    if (this.currentSource) {
      this.currentSource.stop();
      this.currentSource = null;
    }

    const musicFilePath = this.getMusicFile();

    try {
      const response = await fetch(musicFilePath);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

      const source = this.audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.audioContext.destination);
      source.start(0);

      // Store reference to the currently playing source
      this.currentSource = source;
    } catch (error) {
      console.error('Error loading or playing audio:', error);
    }
  }

  getMusicFile() {
    const basePath = '/notes';
    const fileName = `${this.note.toUpperCase()}-${this.tone}.mp3`; // Assuming music files are in MP3 format

    return `${basePath}/${fileName}`;
  }
}

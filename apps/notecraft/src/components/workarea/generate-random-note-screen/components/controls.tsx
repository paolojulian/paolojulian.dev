import SelectScale from '@/components/common/select-scale';
import Typography from '@/components/common/typography/typography';
import GenerateButton from '@/components/workarea/generate-random-note-screen/components/generate-button';
import NoteCount from '@/components/workarea/generate-random-note-screen/components/note-count';
import { Scale } from '@/types/scale.types';

type Props = {
  onGenerate: () => void;
  // eslint-disable-next-line no-unused-vars
  onChangeNoteCount: (count: number) => void;
  // eslint-disable-next-line no-unused-vars
  onSelectScale: (scale: Scale) => void;
  noteCount: number;
  scale: Scale;
};

export default function Controls({
  onGenerate,
  onChangeNoteCount,
  onSelectScale,
  noteCount = 1,
  scale,
}: Props) {
  return (
    <div className='grid grid-cols-4 gap-3 relative'>
      <div className='top-0 left-0 absolute'>
        <Typography as='span' variant='heading-sm'>
          <div>GENERATE</div>
          <div>RANDOM</div>
          <div>NOTES</div>
        </Typography>
      </div>
      {/* Empty space */}
      <div className='w-full aspect-square'></div>
      <div></div>
      <div></div>
      <div></div>

      {/* Generate */}
      <div></div>
      <div></div>
      <div></div>
      <div>
        <GenerateButton onClick={onGenerate} />
      </div>

      {/* Note Count */}
      <div></div>
      <NoteCount onChangeNoteCount={onChangeNoteCount} noteCount={noteCount} />

      {/* Scale */}
      <div className='col-span-4'>
        <SelectScale initialScale={scale} onSelectScale={onSelectScale} />
      </div>
    </div>
  );
}

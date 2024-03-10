import Typography from '@/components/common/typography/typography';
import cn from '@repo/ui/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';

export const noteChoiceVariants = cva('button', {
  variants: {
    variant: {
      default: cn(
        'text-white',
        'bg-gray/15 hover:bg-gray/25',
        'border border-gray/20'
      ),
      selected: cn(
        'text-black',
        'bg-white hover:bg-white/90',
        'border border-gray/20'
      ),
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Props = {
  onClick?: () => void;
  note: string;
  noteNumber: number;
} & VariantProps<typeof noteChoiceVariants>;

export default function NoteChoice({ onClick, note, variant }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        noteChoiceVariants({ variant }),
        'duration-200',
        'aspect-square w-full',
        'active:scale-95',
        'rounded-xl'
      )}
    >
      <Typography as='span' variant='heading-sm'>
        {note}
      </Typography>
    </button>
  );
}

import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';

interface Props {
  title: string;
}

export default function Button({ title }: Props) {
  return (
    <button
      className={cn(
        'w-full bg-primary rounded-lg py-6',
        'duration-500 active:scale-90 active:bg-primary/75 ease-in-out'
      )}
    >
      <Typography variant={'body'} className='text-white'>
        {title}
      </Typography>
    </button>
  );
}

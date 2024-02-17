import Typography from '@repo/ui/components/typography';

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <Typography className='text-gray uppercase' variant={'body-wide'}>
      {title}
    </Typography>
  );
}

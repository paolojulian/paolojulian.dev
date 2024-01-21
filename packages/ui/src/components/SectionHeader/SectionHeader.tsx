import Stack from '../stack';
import Typography from '../typography';

interface Props {
  title: string;
}

export default function SectionHeader({ title }: Props) {
  return (
    <Stack className='ui-pt-2 ui-border-t ui-border-white ui-text-white'>
      <Typography className='ui-uppercase' variant='body-wide'>
        {title}
      </Typography>
    </Stack>
  );
}

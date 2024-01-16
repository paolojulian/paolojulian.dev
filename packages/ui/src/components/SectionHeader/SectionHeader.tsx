import Stack from '../stack';
import Typography from '../typography';

interface Props {
  title: string;
}

export default function SectionHeader({ title }: Props) {
  return (
    <Stack className='ui-pt-2 ui-border-t ui-border-gray ui-text-white'>
      <Typography className='ui-uppercase ui-tracking-[5.76px] ui-text-gray'>
        {title}
      </Typography>
    </Stack>
  );
}

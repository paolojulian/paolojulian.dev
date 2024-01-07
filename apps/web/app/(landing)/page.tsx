import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function Home() {
  return (
    <Stack>
      <Row>
        <Typography>Landing!</Typography>
        <Typography fontSize={'heading-1'}>Landing!</Typography>
        <Typography fontSize={'heading-2'}>Landing!</Typography>
      </Row>
    </Stack>
  );
}

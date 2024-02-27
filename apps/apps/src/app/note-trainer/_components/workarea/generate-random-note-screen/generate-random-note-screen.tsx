'use client';
import Container from '@/app/note-trainer/_components/common/container';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import Select from '@/app/note-trainer/_components/common/select';
import SelectScale from '@/app/note-trainer/_components/common/select-scale';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import cn from '@repo/ui/utils/cn';
import Link from 'next/link';

export default function GenerateRandomNoteScreen() {
  return (
    <div className='py-6 h-full overflow-x-hidden'>
      <Stack className={'items-center h-full w-full'}>
        <SectionTitle title='Random Note Generator' />
        <Container className='flex-1 py-10 w-full'>
          <Stack className='justify-center w-full h-full gap-8'>
            <Stack className='-mx-6 bg-primary h-[180px] w-screen justify-center items-center'>
              <Typography
                className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.50)]'
                variant='heading-xl'
              >
                E
              </Typography>
            </Stack>
            <Row className='justify-center gap-3'>
              <SelectScale />
              <button
                className={cn(
                  'flex-1',
                  'px-6 py-4',
                  'border-[3px] border-primary focus:border-white rounded-lg',
                  'focus:ring-white focus:outline-none'
                )}
              >
                <Typography className='text-primary'>Generate</Typography>
              </button>
            </Row>
          </Stack>
        </Container>
        <Link href='/note-trainer/menu'>
          <Typography
            variant='body-wide'
            className='text-secondary uppercase py-5 w-full text-center'
          >
            Back to menu
          </Typography>
        </Link>
      </Stack>
    </div>
  );
}

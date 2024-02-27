'use client';
import Container from '@/app/note-trainer/_components/common/container';
import SectionTitle from '@/app/note-trainer/_components/common/section-title';
import Select from '@/app/note-trainer/_components/common/select';
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
              <Select placeholder='Select Scale' value={'E major'}>
                {({ handleClose }) => (
                  <div className='flex flex-col py-4 max-h-56 overflow-y-auto bg-white/30 border border-white/20 text-white rounded-lg'>
                    <Typography
                      className='text-gray pointer-events-none uppercase px-2'
                      variant={'body-wide'}
                    >
                      MAJOR
                    </Typography>
                    <Typography
                      as='button'
                      className='py-1 px-2 min-w-52 text-left active:bg-white/30 duration-200 cursor-pointer'
                      variant={'body'}
                      onClick={handleClose}
                    >
                      E major
                    </Typography>
                    <Typography variant={'body'}>F major</Typography>
                    <Typography variant={'body'}>F# major</Typography>
                    <Typography variant={'body'}>G major</Typography>
                    <Typography variant={'body'}>G# major</Typography>
                    <Typography variant={'body'}>A major</Typography>
                    <Typography variant={'body'}>A# major</Typography>
                    <Typography variant={'body'}>B major</Typography>
                    <Typography variant={'body'}>C major</Typography>
                    <Typography variant={'body'}>C# major</Typography>
                    <Typography variant={'body'}>D major</Typography>
                    <Typography variant={'body'}>D# major</Typography>
                    <hr className='bg-black'></hr>
                    <Typography
                      className='text-gray pointer-events-none uppercase'
                      variant={'body-wide'}
                    >
                      MINOR
                    </Typography>

                    <Typography variant={'body'}>E minor</Typography>
                    <Typography variant={'body'}>F minor</Typography>
                    <Typography variant={'body'}>F# minor</Typography>
                    <Typography variant={'body'}>G minor</Typography>
                    <Typography variant={'body'}>G# minor</Typography>
                    <Typography variant={'body'}>A minor</Typography>
                    <Typography variant={'body'}>A# minor</Typography>
                    <Typography variant={'body'}>B minor</Typography>
                    <Typography variant={'body'}>C minor</Typography>
                    <Typography variant={'body'}>C# minor</Typography>
                    <Typography variant={'body'}>D minor</Typography>
                    <Typography variant={'body'}>D# minor</Typography>
                  </div>
                )}
              </Select>
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

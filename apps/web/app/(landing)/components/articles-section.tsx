import SectionHeader from '@repo/ui/components/SectionHeader';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function ArticlesSection() {
  return (
    <Stack className='gap-10'>
      <SectionHeader title='Career' />
      <Stack className='gap-20'>
        <ArticleItem
          imageURL='/'
          date='Oct 2023'
          title='Essential Tools and Libraries for Daily Web Development Works'
        />
        <ArticleItem
          imageURL='/'
          date='Oct 2023'
          title='The Right Way to Make Component Variants using Tailwind'
        />
        <ArticleItem
          imageURL='/'
          date='Oct 2023'
          title='How to Send Emails in Next.js 13 Using the New App API Route'
        />
      </Stack>
    </Stack>
  );
}

interface ArticleItemProps {
  imageURL: string;
  date: string;
  title: string;
}
function ArticleItem({ imageURL, date, title }: ArticleItemProps) {
  return (
    <Row className='gap-10'>
      <div className='aspect-[320/200] w-[320px] bg-white rounded-md border-4 border-gray'></div>
      <Stack className='flex-1 justify-center items-start'>
        <Typography className='text-gray uppercase tracking-widest'>
          {date}
        </Typography>
        <Typography fontSize={'xl'} fontWeight={'semi-bold'}>
          {title}
        </Typography>
      </Stack>
    </Row>
  );
}

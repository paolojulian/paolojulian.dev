import SectionHeader from '@repo/ui/components/SectionHeader';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import Highlight from './highlight';

export default function CareerSection() {
  return (
    <Stack className='gap-52'>
      <Stack className='gap-10'>
        <SectionHeader title='Experience' />
        <Typography variant='heading-lg'>
          With <Highlight>7 years</Highlight> of experience in web and mobile
          development. I have primarily worked on{' '}
          <Highlight>commercial</Highlight> and{' '}
          <Highlight>productivity apps</Highlight>.
        </Typography>
      </Stack>
      <Stack className='gap-10'>
        <Typography variant={'body-wide'}>TECH STACK</Typography>
        <div className='border-b border-stone-700'>
          <ToolItem
            type='Web'
            tools={[
              'NextJS',
              'ReactJS',
              'TailwindCSS',
              'Apollo Graphql',
              'Tan Stack Query',
              'Typescript',
            ]}
          />
          <ToolItem type='Mobile' tools={['React Native', 'Expo']} />
          <ToolItem type='UI/UX' tools={['Figma', "Someone else's website"]} />
        </div>
      </Stack>
      <Stack className='gap-10'>
        <Typography variant={'body-wide'}>CAREER</Typography>
        <div className='border-b border-stone-700'>
          <CareerItem
            year='NOW'
            position='Mid Front-end Developer'
            company='ProSource -- Accelo'
          />
          <CareerItem
            year='2021'
            position='Front-end Developer'
            company='Yondu Inc.'
          />
          <CareerItem
            year='2019'
            position='Mid Full-stack Developer'
            company='YNS Philippines Inc.'
          />
          <CareerItem
            year='2017'
            position='Junior Full-stack Developer'
            company='Utalk Philippines Inc.'
          />
        </div>
      </Stack>
    </Stack>
  );
}

interface CareerItemProps {
  year: string;
  position: string;
  company: string;
}
function CareerItem({ year, position, company }: CareerItemProps) {
  return (
    <Row className='py-10 items-start border-t border-stone-700'>
      <Typography variant='heading' className='uppercase w-[25%]'>
        {year}
      </Typography>
      <Stack className='gap-4'>
        <Typography variant={'heading'}>{position}</Typography>
        <Typography variant='body'>{company}</Typography>
      </Stack>
    </Row>
  );
}

interface ToolItemProps {
  type: string;
  tools: string[];
}
function ToolItem({ type, tools = [] }: ToolItemProps) {
  return (
    <Row className='py-10 items-start border-t border-stone-700'>
      <Typography
        variant='heading'
        className='w-[25%] capitalize text-gray-darker'
      >
        {type}
      </Typography>
      <Stack className='gap-4'>
        {tools.map((tool, i) => (
          <Typography variant={'heading'}>
            {tool} {i !== tools.length - 1 ? '/' : ''}
          </Typography>
        ))}
      </Stack>
    </Row>
  );
}

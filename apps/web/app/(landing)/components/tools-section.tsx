import SectionHeader from '@repo/ui/components/SectionHeader';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function ToolsSection() {
  return (
    <Stack className='gap-10'>
      <SectionHeader title='Tech Stack' />
      <Row className='gap-2'>
        <div className='pr-10 flex-1'>
          <Typography
            as='h2'
            fontSize={'heading-2'}
            fontWeight={'semi-bold'}
            fontFamily='text'
          >
            These are the <span className='text-secondary'>tools</span> i prefer
            to use. These are all temporary until a new Javascript framework
            appears again.
          </Typography>
        </div>
        <Stack className='flex-1 gap-20'>
          <ToolItems
            label='Front-end'
            items={[
              'NextJS',
              'ReactJS',
              'React Native',
              'TailwindCSS',
              'Typescript',
              'Apollo Graphql',
              'Tan Stack Query',
              'Testing Library',
            ]}
          />
          <ToolItems
            label='Back-end'
            items={['NodeJS', 'AWS', 'Contentful', 'Socket.io', 'Graphql']}
          />
          <ToolItems
            label='UI/UX'
            items={['Figma', "Someone else's website"]}
          />
        </Stack>
      </Row>
    </Stack>
  );
}

interface ToolItemsProps {
  label: string;
  items: string[];
}

function ToolItems({ label, items }: ToolItemsProps) {
  return (
    <div className='flex flex-row items-start gap-6'>
      <div className='flex flex-row items-center w-[30%] gap-2'>
        <Typography className='text-gray uppercase' fontSize='lg'>
          {label}
        </Typography>
        <div className='flex-1 h-[1px] w-full bg-gray' />
      </div>
      <div className='flex flex-col'>
        {items.map((item) => (
          <Typography
            className='tracking-wide'
            fontSize={'xl'}
            fontWeight={'semi-bold'}
          >
            {item}
          </Typography>
        ))}
      </div>
    </div>
  );
}

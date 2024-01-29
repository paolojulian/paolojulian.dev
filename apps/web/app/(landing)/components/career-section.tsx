import { gql } from '@apollo/client';
import SectionHeader from '@repo/ui/components/SectionHeader';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';
import dayjs from 'dayjs';
import AppReactMarkdown from '../../../components/app-react-markdown/app-react-markdown';
import { Portfolio } from '../../../graphql/portfolio.types';

interface Props {
  portfolio: Pick<
    Portfolio,
    'experience' | 'careersCollection' | 'toolsCollection'
  >;
}
export default function CareerSection({ portfolio }: Props) {
  const formattedCareers = [...portfolio.careersCollection.items]
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    )
    .map((item, i) => ({
      ...item,
      formattedStartDate:
        i === 0 ? 'NOW' : dayjs(item.startDate).format('YYYY'),
    }));

  return (
    <section id={'experience'}>
      <Stack className='gap-52'>
        <Stack className='gap-10'>
          <SectionHeader title='Experience' />
          <AppReactMarkdown>{portfolio.experience}</AppReactMarkdown>
        </Stack>
        <Stack className='gap-10'>
          <Typography variant={'body-wide'}>TECH STACK</Typography>
          <div className='border-b border-stone-700'>
            {portfolio.toolsCollection.items.map(({ name, items }, i) => (
              <ToolItem key={`${name}_${i}`} type={name} tools={items} />
            ))}
          </div>
        </Stack>
        <Stack className='gap-10'>
          <Typography variant={'body-wide'}>CAREER</Typography>
          <div className='border-b border-stone-700'>
            {formattedCareers.map((careerItem, i) => (
              <CareerItem
                key={`${careerItem.title}_${i}`}
                year={careerItem.formattedStartDate}
                position={careerItem.title}
                company={careerItem.company}
              />
            ))}
          </div>
        </Stack>
      </Stack>
    </section>
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
      <Typography variant='heading' className='w-[25%] capitalize'>
        {type}
      </Typography>
      <Stack className='gap-4'>
        {tools.map((tool, i) => (
          <Typography key={i} variant={'heading'}>
            {tool} {i !== tools.length - 1 ? '/' : ''}
          </Typography>
        ))}
      </Stack>
    </Row>
  );
}

CareerSection.fragments = {
  portfolio: gql`
    fragment CareerFragment on Portfolio {
      experience
      toolsCollection {
        items {
          name
          items
        }
      }
      careersCollection {
        items {
          title
          company
          startDate
        }
      }
    }
  `,
};

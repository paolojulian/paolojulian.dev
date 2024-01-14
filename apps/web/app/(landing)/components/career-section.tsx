import SectionHeader from '@repo/ui/components/SectionHeader';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import Typography from '@repo/ui/components/typography';

export default function CareerSection() {
  return (
    <Stack className='gap-10'>
      <SectionHeader title='Career' />
      <div className='border-b border-stone-700'>
        <CareerItem
          year='NOW'
          position='Mid Front-end Developer / A.I. Prompter'
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
          position='Junior Software Application Developer'
          company='Utalk Philippines Inc.'
        />
      </div>
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
    <Row className='py-6 items-start border-t border-stone-700 gap-20'>
      <Typography
        className='uppercase leading-[5.12px] w-[180px]'
        fontSize={'heading-2'}
        fontWeight={'semi-bold'}
      >
        {year}
      </Typography>
      <Stack>
        <Typography fontSize={'heading-2'} fontWeight={'semi-bold'}>
          {position}
        </Typography>
        <Typography className='text-gray' fontSize={'lg'} fontFamily='text'>
          {company}
        </Typography>
      </Stack>
    </Row>
  );
}

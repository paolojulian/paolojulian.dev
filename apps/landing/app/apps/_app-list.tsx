import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import AppItem from './components/app-item/app-item';
import Typography from '@repo/ui/components/typography';
import { useAppItems } from './graphql/use-app-items';

export default async function AppList() {
  const appItems = await useAppItems();

  return (
    <Stack className='my-20 gap-10'>
      <Stack className='gap-10'>
        <SectionHeader title='Apps' />
        <Typography className='text-white' variant='heading-lg'>
          Here are my <span className='text-primary'>personal hobbies</span>,
          which helps me in my everyday life as a Software Engineer.
        </Typography>
      </Stack>
      <div className='border-t border-white w-full'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {appItems.map((appItem) => (
          <AppItem key={appItem.sys.id} appItem={appItem} />
        ))}
      </div>
    </Stack>
  );
}

import SectionHeader from '@repo/ui/components/SectionHeader';
import AppItem from './components/app-item/app-item';
import { useAppItems } from './graphql/use-app-items';
import { PTypography, Stack } from '@paolojulian.dev/design-system';

export default async function AppList() {
  const appItems = await useAppItems();

  return (
    <Stack className='my-20 gap-10'>
      <Stack className='gap-10'>
        <SectionHeader title='Apps' />
        <PTypography className='text-white' variant='heading-lg'>
          Here are my <span className='text-primary'>personal hobbies</span>,
          which helps me in my everyday life as a Software Engineer.
        </PTypography>
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

import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import AppItem from './components/app-item/app-item';

type AppItemFields = {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  link: string;
  type: string;
};
const mockApps: AppItemFields[] = [
  {
    id: '1',
    description:
      'Git Branch Updater is a script to aid merging and updating multiple dependent branch at once.',
    imageURL: '/images/git-branch-updater.png',
    link: '#',
    title: 'Git Branch Updater',
    type: 'Script',
  },
];

export default function AppList() {
  return (
    <Stack className='my-20'>
      <SectionHeader title='Apps' />
      <div className='grid grid-cols-3'>
        {mockApps.map(({ id, ...app }) => (
          <AppItem key={id} {...app} />
        ))}
      </div>
    </Stack>
  );
}

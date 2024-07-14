import SectionHeader from '@repo/ui/components/SectionHeader';
import Stack from '@repo/ui/components/stack';
import AppItem from './components/app-item/app-item';
import Typography from '@repo/ui/components/typography';

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
  {
    id: '2',
    description:
      'My Day App is a budget tracking and task tracking help to track monthly expenses, tasks and able to view statistics of monthly expenses.',
    imageURL: '/images/git-branch-updater.png',
    link: '#',
    title: 'My Day App',
    type: 'Mobile',
  },
  {
    id: '3',
    description:
      'A pomodoro with a twist, the pomodoro also has a timer going up whenever the pomodoro is on WORK mode, this helps people that their company has log time.',
    imageURL: '/images/git-branch-updater.png',
    link: '#',
    title: 'Pomodoro w/ timer',
    type: 'Web app',
  },
];

export default function AppList() {
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
      <div className='grid grid-cols-3 gap-6'>
        {mockApps.map(({ id, ...app }) => (
          <AppItem key={id} {...app} />
        ))}
      </div>
    </Stack>
  );
}

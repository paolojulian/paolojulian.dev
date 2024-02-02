import PomodoroButtons from '@/app/apps/pomodoro/_components/PomodoroButtons';
import PomodoroElapsedTime from '@/app/apps/pomodoro/_components/PomodoroElapsedTime';
import PomodoroPhaseIndicator from '@/app/apps/pomodoro/_components/PomodoroPhaseIndicator';
import PomodoroTasks from '@/app/apps/pomodoro/_components/PomodoroTasks';
import PomodoroTimer from '@/app/apps/pomodoro/_components/PomodoroTimer';
import Text from '@/app/apps/pomodoro/_components/Text';
import PomodoroProvider from '@/app/apps/pomodoro/_context/PomodoroContext';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Pomodoro: FunctionComponent<Props> = () => {
  return (
    <div className='bg-gradient-to-tr from-[#FCA5A522] to-[#93C5FD22] min-h-screen'>
      <div>
        <div className='border-b-2 border-new-white text-new-white flex justify-between items-end md:p-2 w-full'>
          <Text as='h2'>paolojulian.dev - Pomodoro</Text>
          <span></span>
        </div>
      </div>

      <PomodoroProvider>
        <div className='max-w-screen-lg mx-auto px-4 grid grid-cols-2 gap-10 py-8'>
          <div className='col-span-2'>
            <PomodoroPhaseIndicator />
          </div>

          <div className=''>
            <div className='w-full flex flex-col items-center border border-new-highlightLighter rounded-3xl bg-new-white/10 pt-24 pb-20 px-10'>
              <PomodoroTimer />
              <PomodoroElapsedTime />

              <div className='mt-16'>
                <PomodoroButtons />
              </div>
            </div>
          </div>

          <div className='w-full'>
            <PomodoroTasks />
          </div>
        </div>
      </PomodoroProvider>

      {/* <PomodoroProvider>
        <div
          className={classNames(
            'flex flex-col items-center gap-8 p-4 pb-40',
            'w-full mx-auto max-w-md'
          )}
        >
          <div className='flex flex-col items-center gap-2 mt-4'>
            <PomodoroTimer />
            <PomodoroPhaseIndicator />
          </div>

          <PomodoroTasks />
        </div>

        <div className='fixed inset-x-0 bottom-0'>
          <PomodoroButtons />
        </div>
      </PomodoroProvider> */}
    </div>
  );
};

export default Pomodoro;

import EnterAnimation from '@/_components/animations/enter-animation';
import Uppercase from '@/_components/common/typography/uppercase';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const HeroHeading: FunctionComponent<Props> = () => {
  return (
    <EnterAnimation>
      <div className='flex flex-col gap-4'>
        <h1
          className={[
            'flex flex-col',
            'text-6xl md:text-9xl lg:text-8xl font-bold text-slate-800 tracking-[1.2rem]',
            'font-lora',
          ].join(' ')}
        >
          <HeadingTitleItem text='Keep' />
          <HeadingTitleItem text='It' />
          <HeadingTitleItem text='Simple' />
          <HeadingTitleItem text='Stupid' />
        </h1>
        <div className='flex flex-col md:flex-row gap-1 md:gap-8 text-sm font-medium text-gray-400 md:h-6'>
          <Uppercase type='widest'>PAOLO JULIAN</Uppercase>
          <div className='hidden md:block w-[2px] bg-red-400 self-stretch'></div>
          <div className='block md:hidden w-full h-[1px] bg-red-400'></div>
          <Uppercase type='widest'>SOFTWARE ENGINEER</Uppercase>
        </div>
      </div>
    </EnterAnimation>
  );
};

function HeadingTitleItem({ text }: { text: string }) {
  return (
    <span className='leading-[normal] uppercase'>
      <span className='text-primary-400'>{text.charAt(0)}</span>
      <span>{text.substring(1)}</span>
    </span>
  );
}

export default HeroHeading;

import Typography from '@/components/common/typography/typography';
import CircleShade from '@/components/icons/circle-shade';
import Row from '@repo/ui/components/row';
import Stack from '@repo/ui/components/stack';
import cn from '@repo/ui/utils/cn';
import { ReactElement } from 'react';

type SuccessFailType = 'fail' | 'success';

type Props = {
  onClick: () => void;
  children: ReactElement;
  title: string | ReactElement;
  type: SuccessFailType;
};

export default function SuccessFailCard({
  onClick,
  children,
  title,
  type,
}: Props) {
  return (
    <div
      className={cn(
        'h-full',
        'p-6',
        'border',
        'bg-green/10',
        'rounded-2xl',
        'relative',
        {
          ['border-green bg-green/10']: type === 'success',
          ['border-red bg-red/10']: type === 'fail',
        }
      )}
      onClick={onClick}
    >
      <Stack className='gap-10 h-full'>
        <Typography
          className={cn('uppercase', {
            ['text-green']: type === 'success',
            ['text-red']: type === 'fail',
          })}
          variant='heading-lg'
        >
          {title}
        </Typography>

        {/* Content */}
        <div className='flex-1'>{children}</div>

        {/* Footer */}
        <Row className='justify-end'>
          <div className='absolute right-0 bottom-0'>
            <CircleShade
              className={cn(type === 'success' ? 'text-green' : 'text-red')}
            />
          </div>
          <Typography
            className={cn(type === 'success' ? 'text-green' : 'text-red')}
          >
            Press anywhere to continue...
          </Typography>
        </Row>
      </Stack>
    </div>
  );
}

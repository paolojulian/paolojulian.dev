import cn from '@repo/ui/utils/cn';

type Props = {
  className?: string;
};

export default function CircleShade({ className }: Props) {
  return (
    <svg
      width='339'
      height='117'
      viewBox='0 0 339 117'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('text-green', className)}
    >
      <circle
        cx='199.5'
        cy='192.5'
        r='181.5'
        fill='currentColor'
        fillOpacity='0.1'
      />
      <circle
        cx='199'
        cy='199'
        r='199'
        fill='currentColor'
        fillOpacity='0.1'
      />
    </svg>
  );
}

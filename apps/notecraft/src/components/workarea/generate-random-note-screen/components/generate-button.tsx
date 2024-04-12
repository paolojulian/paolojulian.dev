import cn from '@repo/ui/utils/cn';

type Props = {
  onClick: () => void;
};
export default function GenerateButton({ onClick }: Props) {
  return (
    <button
      className={cn(
        'aspect-square w-full',
        'rounded-xl bg-red text-black',
        'flex justify-center items-center'
      )}
      onClick={onClick}
    >
      <svg
        width='41'
        height='41'
        viewBox='0 0 41 41'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.16663 7.16671V15.5H8.13663M8.13663 15.5C9.24304 12.7636 11.2261 10.4716 13.775 8.98314C16.3239 7.49473 19.2946 6.89406 22.2216 7.27528C25.1485 7.65649 27.8663 8.99803 29.9489 11.0897C32.0315 13.1813 33.3614 15.9048 33.73 18.8334M8.13663 15.5H15.5M33.8333 33.8334V25.5H32.865M32.865 25.5C31.757 28.2349 29.7733 30.5251 27.2247 32.0122C24.676 33.4993 21.7062 34.0992 18.7801 33.7182C15.8541 33.3371 13.137 31.9965 11.0542 29.9063C8.97141 27.816 7.64055 25.0941 7.26996 22.1667M32.865 25.5H25.5'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}

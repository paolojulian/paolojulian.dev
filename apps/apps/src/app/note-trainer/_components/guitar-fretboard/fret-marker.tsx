interface Props {
  x: number;
  y: number;
}
export default function FretMarker({ x, y }: Props) {
  return (
    <circle cx={x} cy={y} r='8' fill='white' stroke='black' strokeWidth='2' />
  );
}

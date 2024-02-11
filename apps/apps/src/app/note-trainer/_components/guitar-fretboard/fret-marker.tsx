interface Props {
  x: number;
  y: number;
}
export default function FretMarker({ x, y }: Props) {
  return (
    <circle cx={x} cy={y} r='7' fill='black' stroke='black' strokeWidth='2' />
  );
}

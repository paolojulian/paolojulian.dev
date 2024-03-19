import dynamic from 'next/dynamic';

const EarTrainingScreen = dynamic(
  () => import('@/components/workarea/ear-training-screen/ear-training-screen'),
  {
    ssr: false,
  }
);

export default function EarTrainingPage() {
  return <EarTrainingScreen />;
}

import NoteChoice from '@/components/common/note-choice';
import WelcomeScreen from '../components/workarea/welcome-screen/welcome-screen';
import { Fragment } from 'react';

export default function Home() {
  // return <WelcomeScreen />;
  return (
    <Fragment>
      <NoteChoice note='F' noteNumber={1} />
      <NoteChoice note='C' noteNumber={1} variant={'selected'} />
    </Fragment>
  );
}

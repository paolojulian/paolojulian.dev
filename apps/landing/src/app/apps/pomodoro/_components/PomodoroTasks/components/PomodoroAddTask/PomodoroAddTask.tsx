import Text from '@/app/apps/pomodoro/_components/Text';
import classNames from 'classnames';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().required().max(50, 'Should be less than 50 characters.').label('Title'),
  description: Yup.string().max(500).label('Description'),
});

export type TaskForm = Yup.InferType<typeof validationSchema>;

interface PomodoroAddTaskProps {
  onAddTask: (form: TaskForm) => void;
}

export default function PomodoroAddTask({ onAddTask }: PomodoroAddTaskProps) {
  const [isAdding, setIsAdding] = useState(false);
  const inputTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseAddTask();
      }
    };

    if (isAdding) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isAdding]);

  const handleClickAddTask = () => {
    setIsAdding(true);
    setTimeout(() => {
      inputTitleRef.current?.focus();
    });
  };

  const handleCloseAddTask = () => {
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <button
        className={classNames(
          'flex justify-center items-center p-6 border border-new-highlight rounded-2xl hover:bg-new-white/10'
        )}
        onClick={handleClickAddTask}
      >
        <Text size='large'>+ ADD</Text>
      </button>
    );
  }

  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-stretch p-4 border border-new-highlight rounded gap-4',
        'font-sans'
      )}
    >
      <div className='flex justify-between items-center'>
        <Text as='h2'>Add a new task</Text>
        <button onClick={handleCloseAddTask}>X</button>
      </div>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={validationSchema}
        onSubmit={function handleSubmit(form, { resetForm }) {
          onAddTask(form);
          setIsAdding(false);
          resetForm();
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
          <form
            className='flex flex-col items-stretch gap-2'
            onSubmit={function submitForm(e) {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className='flex flex-col gap-2'>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                className={classNames(
                  'bg-transparent p-2 rounded border placeholder-new-highlight text-new-white focus:outline-new-accent',
                  touched.title && !!errors.title
                    ? 'border-red-400'
                    : 'border-new-highlight'
                )}
                name='title'
                type='text'
                placeholder='Title'
                ref={inputTitleRef}
              ></input>
              {touched.title && !!errors.title && (
                <span className={'-mt-1 text-red-400 text-sm'}>
                  {errors.title}
                </span>
              )}
              <textarea
                onBlur={handleBlur}
                onChange={handleChange}
                name='description'
                className={classNames(
                  'bg-transparent p-2 rounded border placeholder-new-highlight text-new-white focus:outline-new-accent',
                  touched.description && !!errors.description
                    ? 'border-red-400'
                    : 'border-new-highlight'
                )}
                rows={5}
                placeholder='Description'
              ></textarea>
              {touched.title && !!errors.title && (
                <span className={'-mt-1 text-red-400 text-sm'}>
                  {errors.description}
                </span>
              )}
            </div>
            <button className='w-fit self-center' type='submit'>
              <Text>+ Add</Text>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

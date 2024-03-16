import Select from '../select';
import { MAJOR_SCALES, Scale } from '../../../types/scale.types';
import { useEffect, useState } from 'react';
import Typography from '@/components/common/typography';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelectScale: (scale: Scale) => void;
  initialScale: Scale;
}

export default function SelectScale({ initialScale, onSelectScale }: Props) {
  const [selectedScale, setSelectedScale] = useState<Scale>(initialScale);

  const handleSelectItem = (scale: Scale) => {
    setSelectedScale(scale);
  };

  useEffect(() => {
    onSelectScale(selectedScale);
  }, [selectedScale]);

  return (
    <Select placeholder='Select Scale' value={selectedScale}>
      {({ handleClose }) => (
        <ul className='flex flex-col py-2 px-2 max-h-56 overflow-y-auto bg-gray border border-white/20 text-white rounded-lg'>
          <Typography
            className='text-white/70 pointer-events-none uppercase px-2'
            variant={'body-wide'}
            as='li'
          >
            MAJOR
          </Typography>
          {(Object.keys(MAJOR_SCALES) as Scale[]).map((scale, i) => (
            <Typography
              key={`${scale}_${i}`}
              as='li'
              className='py-1 px-2 min-w-52 text-left active:bg-white/30 duration-200 cursor-pointer'
              variant={'heading-sm'}
              onClick={() => {
                handleClose();
                handleSelectItem(scale);
              }}
            >
              {scale}
            </Typography>
          ))}
          <div className='w-full h-1 bg-white px-2 my-2'></div>
        </ul>
      )}
    </Select>
  );
}

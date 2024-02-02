import Text from '@/_components/common/typography/text';
import Row from '@/_components/layouts/row';
import classNames from 'classnames';
import { FunctionComponent } from 'react';

type TextColor = 'black' | 'white' | 'highlight';

const textColorMap: Record<TextColor, string> = {
  white: 'text-new-white',
  black: 'text-new-black',
  highlight: 'text-new-highlight',
};

interface Props {
  isActive?: boolean;
  textColor?: TextColor;
  title: string;
}

const HoverableTitle: FunctionComponent<Props> = ({
  isActive = false,
  textColor = 'black',
  title,
}) => {
  return (
    <Row className='items-center gap-2'>
      <span
        className={classNames(
          'aspect-square w-3 rounded-full',
          'transition',
          isActive
            ? 'bg-new-black opacity-100'
            : 'opacity-0 group-hover:opacity-100 bg-new-white'
        )}
      ></span>
      <Text
        as='h3'
        className={classNames(
          'text-sm md:text-lg transition-transform line-clamp-1',
          textColorMap[textColor],
          isActive ? '' : '-translate-x-4 group-hover:translate-x-0'
        )}
      >
        {title}
      </Text>
    </Row>
  );
};

export default HoverableTitle;

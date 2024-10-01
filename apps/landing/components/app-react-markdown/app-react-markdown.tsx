import ReactMarkdown from 'react-markdown';
import Highlight from '../../app/(landing)/components/highlight';
import { PTypography } from '@paolojulian.dev/design-system';

interface Props {
  children: any;
}

export default function AppReactMarkdown({ children }: Props) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <PTypography variant={'heading-lg'}>{children}</PTypography>
        ),
        strong: ({ children }) => <Highlight>{children}</Highlight>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

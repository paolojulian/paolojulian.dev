import ReactMarkdown from 'react-markdown';
import { PTypography } from '@paolojulian.dev/design-system';
import TypographyHighlight from '../../app/(landing)/components/typography-highlight';

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
        strong: ({ children }) => (
          <TypographyHighlight>{children}</TypographyHighlight>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

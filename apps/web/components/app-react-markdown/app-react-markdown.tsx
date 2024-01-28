import Typography from '@repo/ui/components/typography';
import ReactMarkdown from 'react-markdown';
import Highlight from '../../app/(landing)/components/highlight';

interface Props {
  children: any;
}

export default function AppReactMarkdown({ children }: Props) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <Typography variant={'heading-lg'}>{children}</Typography>
        ),
        strong: ({ children }) => <Highlight>{children}</Highlight>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

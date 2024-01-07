import React, { FunctionComponent } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import AppHeading from '../common/app-heading';
import CodeBlock from '../common/code-block/code-block';
import ZoomableImage from '@/_components/images/zoomable-image';
import CodeSpan from '@/_components/common/code-span';
import Blockquote from '@/_components/common/blockquote';
import styles from './app-react-markdown.module.css';

export type AppReactMarkdownProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof ReactMarkdown>;

function toKebabCase(text: string) {
  return text.replace(/\s+/g, '-').toLowerCase();
}

const AppReactMarkdown: FunctionComponent<AppReactMarkdownProps> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <AppHeading.H2
              id={toKebabCase(children.toString())}
              className='font-bold mt-16 mb-6'
            >
              {children}
            </AppHeading.H2>
          ),
          h3: ({ children }) => (
            <AppHeading.H3
              id={toKebabCase(children.toString())}
              className='font-bold mt-8 mb-2'
            >
              {children}
            </AppHeading.H3>
          ),
          h4: ({ children }) => (
            <AppHeading.H4
              id={toKebabCase(children.toString())}
              className='font-bold mt-8'
            >
              {children}
            </AppHeading.H4>
          ),
          p: ({ children }) => <p className='leading-relaxed'>{children}</p>,
          ol: ({ children }) => (
            <ol
              className='whitespace-normal mt-4 mb-4'
              style={{
                listStyleType: 'decimal',
                listStylePosition: 'inside',
              }}
            >
              {children}
            </ol>
          ),
          ul: ({ children }) => (
            <ul
              className='whitespace-normal mt-2'
              style={{
                listStyleType: 'disc',
                listStylePosition: 'inside',
                marginLeft: '24px',
              }}
            >
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className='text-new-white whitespace-normal leading-normal'>
              {children}
            </li>
          ),
          a: ({ href, children }) => (
            <a href={href} className='text-new-accent font-medium'>
              {children}
            </a>
          ),
          img: ({ ...props }) => <ZoomableImage {...props}></ZoomableImage>,
          strong: ({ children }) => (
            <strong className='font-semibold leading-relaxed'>
              {children}
            </strong>
          ),
          pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
          code: ({ children, className }) => (
            <CodeSpan language={className?.replace('language-', '') || ''}>
              {children}
            </CodeSpan>
          ),
          blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
          hr: () => <hr className='my-8' />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default AppReactMarkdown;

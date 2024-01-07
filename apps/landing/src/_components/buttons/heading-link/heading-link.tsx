'use client';
import { DATA_TEST } from '@/_components/buttons/heading-link/heading-link.constants';
import LinkIcon from '@/_components/icons/link-icon';
import useCopy from '@/_hooks/use-copy';
import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  Heading: React.ReactNode;
  tag: string;
}

const HeadingLink: FunctionComponent<Props> = ({
  Heading,
  tag,
  className,
  ...props
}) => {
  const link = `${window.location.origin}${window.location.pathname}#${tag}`; // https://paolojulian.dev/blogs/test#heading-1
  const { isCopied, handleClickCopy } = useCopy({ link, timeout_ms: 2000 });

  return (
    <div
      {...props}
      className={classNames(
        'flex flex-row gap-[8px] items-center group',
        className
      )}
      data-testid={DATA_TEST.container}
      data-link={link}
    >
      <span>{Heading}</span>
      <span
        className={classNames(
          'relative group/link-icon', // position
          'transition-opacity opacity-0 group-hover:opacity-100' // opacity
        )}
        data-testid={DATA_TEST.popover}
        onClick={handleClickCopy}
        role='button'
      >
        <div
          className={classNames(
            'absolute top-0 left-0 -translate-y-full', // position
            'pb-2' // spacing
          )}
        >
          <div
            className={classNames(
              'opacity-0 group-hover/link-icon:opacity-100', // animation
              'px-2 py-1 rounded-lg  shadow', // container
              isCopied ? 'bg-green-500/75' : 'bg-slate-800/75',
              ' whitespace-nowrap text-[12px] text-white' //content
            )}
          >
            {isCopied ? 'Copied!' : 'Copy to clipboard'}
          </div>
        </div>
        <LinkIcon className='text-slate-400 group-hover/link-icon:hover:text-green-500' />
      </span>
    </div>
  );
};

export default HeadingLink;

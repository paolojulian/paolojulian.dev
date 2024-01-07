import { useEffect, useState } from "react";

interface Props {
  link: string;
  timeout_ms?: number;
}

export default function useCopy({ link, timeout_ms = 2000 }: Props) {

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, timeout_ms)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [isCopied, timeout_ms])

  const handleClickCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link);
      setIsCopied(true);
    }
  };

  return {
    isCopied,
    handleClickCopy
  }
}
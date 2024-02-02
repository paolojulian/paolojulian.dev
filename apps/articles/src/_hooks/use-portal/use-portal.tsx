import createWrapperAndAppendToBody from '@/_utils/create-wrapper-and-append-to-body';
import { useLayoutEffect, useState } from 'react';

export default function usePortal(portalId = 'fixed') {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  useLayoutEffect(() => {
    let element = document.getElementById(portalId);
    if (!element) {
      element = createWrapperAndAppendToBody(portalId);
    }
    setPortalRoot(element);
  }, [portalId]);

  return portalRoot;
}

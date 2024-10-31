import React, { useState, useEffect } from 'react';
import { createPortal, render } from 'react-dom';
import { IframeErrorPage } from '../components/ErrorPage';
import { createIframe } from '../utils/iframe';
import { selectors } from '@src/constants/selectors';

export const IframePortal = (props: React.PropsWithChildren) => {
  const [iframeNotRendered, setIframeNotRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const iframe = document.getElementById(selectors.iframeId);

      if (!iframe) {
        // TODO: Implement Sentry
        setIframeNotRendered(true);
      }
    }, 5000);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const iframe = createIframe();
  const container = document.getElementById(selectors.iframeContainerId);

  if (container && !iframeNotRendered) {
    return createPortal(props.children, container.appendChild(iframe));
  }

  return (
    <>
      {(!container || iframeNotRendered) && <IframeErrorPage />}
    </>
  );
};

export const renderIframeApp = async () => {
  const iframeFallbackContainer = document.getElementById(
    selectors.fallbackIframeContainerId
  );

  render(<IframePortal />, iframeFallbackContainer);
}

import { selectors } from '@src/constants/selectors';
import { initInterframe } from '../lib/interframe';

function getIframeHeight() {
  const adminMenuWrap = document.getElementById('adminmenuwrap');
  const sideMenuHeight = adminMenuWrap ? adminMenuWrap.offsetHeight : 0;
  const adminBar = document.getElementById('wpadminbar');
  const adminBarHeight = (adminBar && adminBar.offsetHeight) || 0;

  if (window.innerHeight < sideMenuHeight) {
    return sideMenuHeight;
  } else {
    return window.innerHeight - adminBarHeight;
  }
}

function addIframeResizeEvent(iframe: HTMLIFrameElement) {
  let animationFrame: number;
  window.addEventListener(
    'resize',
    () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = requestAnimationFrame(() => {
        iframe.style.minHeight = `${getIframeHeight()}px`;
      });
    },
    true
  );
}

function createIframeElement(iframeSrc: string): HTMLIFrameElement {
  const iframe = document.createElement('iframe');
  iframe.id = selectors.iframeId;
  iframe.src = iframeSrc;
  iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  iframe.setAttribute(
    'sandbox',
    'allow-scripts allow-forms allow-popups allow-top-navigation allow-same-origin'
  );
  iframe.style.minHeight = `${getIframeHeight()}px`;
  addIframeResizeEvent(iframe);
  return iframe;
}

function createSpinnerImage() {
  const img = document.createElement('img');
  img.src = `${window.accessiblyConfig.pluginPath}/public/assets/images/loader.svg`;
  img.id = 'hs-plugin-loader';
  img.style.cssText = `
    top: 50%;
    left: 50%;
    margin-left: -41px;
    margin-top: -37;
    display: block;
    position: absolute;
    z-index: 900;
  `;

  return img;
}

function addIframeLoadEvent(
  iframeContainer: HTMLElement,
  img: HTMLElement,
  iframe: HTMLIFrameElement
) {
  iframe.addEventListener(
    'load',
    () => {
      if (img && document.getElementById(img.id)) {
        img.remove();
      }
    },
    true
  );
}

function withLoadingSpinner(iframe: HTMLIFrameElement) {
  const iframeContainer = document.createElement('div');
  const img = createSpinnerImage();
  iframeContainer.appendChild(img);
  iframeContainer.appendChild(iframe);
  addIframeLoadEvent(iframeContainer, img, iframe);
  return iframeContainer;
}

export function createIframe() {
  const urlObject = new URL(window.accessiblyConfig.iframeUrl);

  // Append default query params
  urlObject.searchParams.append('source', 'wordpress');
  urlObject.searchParams.append('domain', window.accessiblyConfig.domain);

  const iframeSrcUrl = urlObject.toString();

  const iframe = createIframeElement(iframeSrcUrl);

  initInterframe(iframe);

  return withLoadingSpinner(iframe);
}

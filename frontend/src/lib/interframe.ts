import { connectToChild } from 'penpal';
import { updateAppConfig, updateWidgetOptions } from '@src/api/wordpress';
import { IAppConfig } from '@src/types/IAppConfig';
import { IWidgetOptions } from '@src/types/IWidgetOptions';
import { Connection } from 'penpal/lib/types';

interface ConnectionMethods {
  initializeApp: (config: IAppConfig) => void;
  updateOptions: (widgetOptions: IWidgetOptions) => void;
  sendMessageToParent: (message: string) => void;
}

/**
 * @param iframe
 * @returns Connection<ConnectionMethods>
 */
function createConnectionToIframe(iframe: HTMLIFrameElement): Connection<ConnectionMethods> {
  return connectToChild<ConnectionMethods>({
    iframe,
    // Methods the parent is exposing to the child
    methods: {
      initializeApp: async (config: IAppConfig) => {
        await updateAppConfig(config)
      },
      updateOptions: async (options: IWidgetOptions) => {
        await updateWidgetOptions(options);
      },
      sendMessageToParent: function (message) {
        console.log('Child sent message:', message);
      },
    },
  });
}

export function initInterframe(iframe: HTMLIFrameElement) {
  if (!window.childFrameConnection) {
    window.childFrameConnection = createConnectionToIframe(iframe);
    window.childFrameConnection.promise.catch(error => console.log(error));
  }
}

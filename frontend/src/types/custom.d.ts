export {};

interface AccessiblyPluginConfig {
  adminUrl: string;
  restUrl: string;
  iframeUrl: string;
  pluginPath: string;
  domain: string;
  siteUrl: string;
}

declare global {
  interface Window {
    accessiblyConfig: AccessiblyPluginConfig;
    childFrameConnection: any;
  }
}

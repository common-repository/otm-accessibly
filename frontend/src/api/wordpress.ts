import { IAppConfig } from '@src/types/IAppConfig';
import { IWidgetOptions } from '@src/types/IWidgetOptions';
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

interface WordpressResponse<T> {
  status: string;
  message: string;
  payload: T;
}

/**
 * @type {Readonly<Record<string, string | boolean>>}
 */
const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
};

/**
 * @returns AxiosInstance
 */
export function getWordpressClient(): AxiosInstance {
  return axios.create({
    baseURL: `${window.accessiblyConfig.restUrl}otm-ac/v1`,
    headers,
  });
}

/**
 * Api routes defined in the Wordpress plugin:
 *  - public/admin/AdminApi.php
 */

/**
 * @returns {Promise<AxiosResponse>}
 */
export function getGlocalConfig(): Promise<AxiosResponse> {
  return getWordpressClient()
    .get('/global-config');
}

/**
 * @param widgetOptions
 * @returns
 */
export function updateWidgetOptions(widgetOptions: IWidgetOptions): Promise<AxiosResponse<WordpressResponse<IWidgetOptions>>> {
  return getWordpressClient()
    .post('/update-widget-options', widgetOptions);
}

/**
 * @param appConfig
 * @returns
 */
export function updateAppConfig(appConfig: IAppConfig): Promise<AxiosResponse> {
  return getWordpressClient()
    .post('/update-app-config', { appConfig });
}

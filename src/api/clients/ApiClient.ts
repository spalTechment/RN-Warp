// Generated per rules/network/api-layer.mdc and coding standards
// References:
// - config/project-config-sample.json (api.baseUrl, endpoints, dataModels, architecture.httpClient)
// - rules/network/api-layer.mdc (structure, interceptors, error handling)

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Default timeout in ms
const DEFAULT_TIMEOUT = 10000;

// Simple environment-aware base URL provider.
// If an env-specific config exists, prefer that; otherwise fall back to config.api.baseUrl.
// Allow override via runtime setter.
let runtimeBaseUrl: string | null = null;

export const setApiBaseUrl = (url: string) => {
  runtimeBaseUrl = url;
};

export interface ApiEnvironment {
  apiBaseUrl: string;
  logLevel?: 'silent' | 'error' | 'warn' | 'info' | 'debug';
  debugMode?: boolean;
}

export interface ApiClientOptions {
  baseUrl: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
  getAuthToken?: () => Promise<string | null> | string | null;
  maxRetries?: number; // for 5xx responses and network errors
}

export const createApiClient = (opts: ApiClientOptions): AxiosInstance => {
  const instance = axios.create({
    baseURL: opts.baseUrl,
    timeout: opts.timeout ?? DEFAULT_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      ...(opts.defaultHeaders ?? {}),
    },
  });

  const maxRetries = Math.max(0, opts.maxRetries ?? 2);

  // Request interceptor: attach auth token if available
  instance.interceptors.request.use(async (config) => {
    try {
      const token = typeof opts.getAuthToken === 'function' ? await opts.getAuthToken() : null;
      if (token) {
        config.headers = config.headers ?? {};
        // Bearer by convention; adjust as needed per project auth scheme
        (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
      }
      if (__DEV__) {
        // Minimal debug logging to avoid noisy console in production
        // eslint-disable-next-line no-console
        console.debug('[API] →', config.method?.toUpperCase(), config.baseURL + config.url);
      }
      return config;
    } catch (e) {
      return config; // do not block request on token failure
    }
  });

  // Response interceptor: basic logging and retry for 5xx/network errors
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.debug('[API] ←', response.status, response.config.baseURL + response.config.url);
      }
      return response;
    },
    async (error: AxiosError) => {
      const config = error.config as (AxiosRequestConfig & { __retryCount?: number });
      const status = error.response?.status;
      const isNetwork = !error.response && (error.code === 'ECONNABORTED' || error.message === 'Network Error');
      const shouldRetry = isNetwork || (status !== undefined && status >= 500 && status < 600);

      if (shouldRetry && config) {
        config.__retryCount = config.__retryCount ?? 0;
        if (config.__retryCount < maxRetries) {
          config.__retryCount += 1;
          const delay = Math.min(1000 * 2 ** (config.__retryCount - 1), 4000);
          await new Promise((res) => setTimeout(res, delay));
          return instance.request(config);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

// Singleton with lazy initialization. Allows runtime override for base URL.
let apiClientSingleton: AxiosInstance | null = null;

export const getApiClient = (baseUrlFromConfig: string, getAuthToken?: ApiClientOptions['getAuthToken']): AxiosInstance => {
  if (apiClientSingleton) return apiClientSingleton;
  const baseUrl = runtimeBaseUrl || baseUrlFromConfig;
  apiClientSingleton = createApiClient({ baseUrl, getAuthToken });
  return apiClientSingleton;
};


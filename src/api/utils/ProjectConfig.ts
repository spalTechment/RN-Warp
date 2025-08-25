// Project config utilities to expose API config at runtime
// Reads from config/project-config-sample.json to avoid hardcoding values.
// If you have environment-specific config, you can swap this module accordingly.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const projectConfig = require('../../../config/project-config-sample.json');

type ProjectConfig = typeof projectConfig;

export const getApiBaseUrl = (): string => {
  // Prefer environments if present; fallback to api.baseUrl
  // @ts-expect-error: dynamic shape tolerated for flexibility
  const envBase = projectConfig?.environments?.current
    ? // @ts-expect-error index access on dynamic config
      projectConfig.environments[projectConfig.environments.current]?.apiUrl
    : undefined;
  return envBase || (projectConfig as ProjectConfig).api.baseUrl;
};

export const getEndpoints = () => (projectConfig as ProjectConfig).api.endpoints;


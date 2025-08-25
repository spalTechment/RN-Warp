// API constants derived from configuration. Do not hardcode values.
// This module centralizes names and shared constants used across the API layer.

export const DEFAULT_TIMEOUT_MS = 10000;
export const MAX_RETRY_ATTEMPTS = 2;

export const HEADER_CONTENT_TYPE = 'Content-Type';
export const CONTENT_TYPE_JSON = 'application/json';

export const API_ERROR_UNKNOWN = 'UNKNOWN_ERROR';
export const API_ERROR_NETWORK = 'NETWORK_ERROR';
export const API_ERROR_TIMEOUT = 'TIMEOUT_ERROR';
export const API_ERROR_SERVER = 'SERVER_ERROR';
export const API_ERROR_CLIENT = 'CLIENT_ERROR';


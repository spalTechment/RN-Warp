// Utility types and helpers for API layer

export type Result<T> = { ok: true; data: T } | { ok: false; error: ApiError };

export interface ApiError {
  code: string; // e.g., NETWORK_ERROR, TIMEOUT_ERROR, SERVER_ERROR, CLIENT_ERROR, UNKNOWN_ERROR
  status?: number;
  message: string;
  details?: unknown;
}

export const toUserMessage = (error: ApiError): string => {
  switch (error.code) {
    case 'NETWORK_ERROR':
      return 'Network error. Please check your connection and try again.';
    case 'TIMEOUT_ERROR':
      return 'The request timed out. Please try again.';
    case 'SERVER_ERROR':
      return 'Server error. Please try again later.';
    case 'CLIENT_ERROR':
      return error.message || 'Invalid request.';
    default:
      return 'Something went wrong. Please try again.';
  }
};


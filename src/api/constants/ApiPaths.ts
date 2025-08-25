// Generated from config.api.endpoints in config/project-config-sample.json
// Centralized endpoint path constants to avoid scattering literals.

export const PET_FIND_BY_STATUS = '/pet/findByStatus';
export const PET_BY_ID = (petId: number) => `/pet/${petId}`;
export const PET = '/pet';
export const PET_UPLOAD_IMAGE = (petId: number) => `/pet/${petId}/uploadImage`;

export const STORE_INVENTORY = '/store/inventory';
export const STORE_ORDER = '/store/order';
export const STORE_ORDER_BY_ID = (orderId: number) => `/store/order/${orderId}`;

export const USER = '/user';
export const USER_LOGIN = '/user/login';
export const USER_LOGOUT = '/user/logout';
export const USER_BY_NAME = (username: string) => `/user/${username}`;


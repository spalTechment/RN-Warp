// Services for Store resource
import { AxiosInstance } from 'axios';
import { getApiClient } from '../clients/ApiClient';
import * as storeEndpoints from '../endpoints/StoreEndpoints';
import { Order } from '../models/Order';
import { getApiBaseUrl } from '../utils/ProjectConfig';

export interface StoreServiceDeps {
  baseUrl?: string;
  client?: AxiosInstance;
  getAuthToken?: () => Promise<string | null> | string | null;
}

export const createStoreService = (deps: StoreServiceDeps = {}) => {
  const baseUrl = deps.baseUrl ?? getApiBaseUrl();
  const client = deps.client ?? getApiClient(baseUrl, deps.getAuthToken);

  return {
    getInventory: () => storeEndpoints.getInventory(client),
    placeOrder: (order: Omit<Order, 'id'>) => storeEndpoints.placeOrder(client, order),
    getOrderById: (orderId: number) => storeEndpoints.getOrderById(client, orderId),
    deleteOrderById: (orderId: number) => storeEndpoints.deleteOrderById(client, orderId),
  };
};


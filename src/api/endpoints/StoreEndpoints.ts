// Endpoints for Store resource, generated from config.api.endpoints.store
import { AxiosInstance } from 'axios';
import { Order } from '../models/Order';
import { STORE_INVENTORY, STORE_ORDER, STORE_ORDER_BY_ID } from '../constants/ApiPaths';

export const getInventory = async (client: AxiosInstance): Promise<Record<string, number>> => {
  const res = await client.get(STORE_INVENTORY);
  return res.data as Record<string, number>;
};

export const placeOrder = async (client: AxiosInstance, order: Omit<Order, 'id'>): Promise<Order> => {
  const res = await client.post(STORE_ORDER, order);
  return res.data as Order;
};

export const getOrderById = async (client: AxiosInstance, orderId: number): Promise<Order> => {
  const res = await client.get(STORE_ORDER_BY_ID(orderId));
  return res.data as Order;
};

export const deleteOrderById = async (client: AxiosInstance, orderId: number): Promise<void> => {
  await client.delete(STORE_ORDER_BY_ID(orderId));
};


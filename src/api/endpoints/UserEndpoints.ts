// Endpoints for User resource, generated from config.api.endpoints.user
import { AxiosInstance } from 'axios';
import { User } from '../models/User';
import { USER, USER_BY_NAME, USER_LOGIN, USER_LOGOUT } from '../constants/ApiPaths';

export const createUser = async (client: AxiosInstance, user: User): Promise<User> => {
  const res = await client.post(USER, user);
  return res.data as User;
};

export const login = async (client: AxiosInstance, username: string, password: string): Promise<string> => {
  const res = await client.get(USER_LOGIN, { params: { username, password } });
  return res.data as string;
};

export const logout = async (client: AxiosInstance): Promise<void> => {
  await client.get(USER_LOGOUT);
};

export const getUserByName = async (client: AxiosInstance, username: string): Promise<User> => {
  const res = await client.get(USER_BY_NAME(username));
  return res.data as User;
};

export const updateUser = async (client: AxiosInstance, username: string, user: User): Promise<void> => {
  await client.put(USER_BY_NAME(username), user);
};

export const deleteUser = async (client: AxiosInstance, username: string): Promise<void> => {
  await client.delete(USER_BY_NAME(username));
};


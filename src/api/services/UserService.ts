// Services for User resource
import { AxiosInstance } from 'axios';
import { getApiClient } from '../clients/ApiClient';
import * as userEndpoints from '../endpoints/UserEndpoints';
import { User } from '../models/User';
import { getApiBaseUrl } from '../utils/ProjectConfig';

export interface UserServiceDeps {
  baseUrl?: string;
  client?: AxiosInstance;
  getAuthToken?: () => Promise<string | null> | string | null;
}

export const createUserService = (deps: UserServiceDeps = {}) => {
  const baseUrl = deps.baseUrl ?? getApiBaseUrl();
  const client = deps.client ?? getApiClient(baseUrl, deps.getAuthToken);

  return {
    create: (user: User) => userEndpoints.createUser(client, user),
    login: (username: string, password: string) => userEndpoints.login(client, username, password),
    logout: () => userEndpoints.logout(client),
    getByName: (username: string) => userEndpoints.getUserByName(client, username),
    update: (username: string, user: User) => userEndpoints.updateUser(client, username, user),
    remove: (username: string) => userEndpoints.deleteUser(client, username),
  };
};


// Resource-specific hooks for User
import { useMemo } from 'react';
import { createUserService, UserServiceDeps } from '../services/UserService';

export const useUserService = (deps?: UserServiceDeps) => {
  return useMemo(() => createUserService(deps), [deps]);
};


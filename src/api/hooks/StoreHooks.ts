// Resource-specific hooks for Store
import { useMemo } from 'react';
import { createStoreService, StoreServiceDeps } from '../services/StoreService';

export const useStoreService = (deps?: StoreServiceDeps) => {
  return useMemo(() => createStoreService(deps), [deps]);
};


// Resource-specific hooks for Pet
// These are lightweight wrappers that wire services to React usage sites.
// Depending on your data fetching strategy, you can swap to react-query in future.
import { useCallback, useMemo, useState } from 'react';
import { Pet, PetStatus } from '../models/Pet';
import { createPetService, PetServiceDeps } from '../services/PetService';

export const usePetService = (deps?: PetServiceDeps) => {
  return useMemo(() => createPetService(deps), [deps]);
};

export const usePetsByStatus = (status: PetStatus, deps?: PetServiceDeps) => {
  const service = usePetService(deps);
  const [data, setData] = useState<Pet[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await service.listByStatus(status);
      setData(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [service, status]);

  return { data, loading, error, refetch };
};


// Services for Pet resource: encapsulate business logic around Pet endpoints
import { AxiosInstance } from 'axios';
import { getApiClient } from '../clients/ApiClient';
import { Pet } from '../models/Pet';
import * as petEndpoints from '../endpoints/PetEndpoints';

import { getApiBaseUrl } from '../utils/ProjectConfig';

export interface PetServiceDeps {
  baseUrl?: string;
  client?: AxiosInstance;
  getAuthToken?: () => Promise<string | null> | string | null;
}

export const createPetService = (deps: PetServiceDeps = {}) => {
  const baseUrl = deps.baseUrl ?? getApiBaseUrl();
  const client = deps.client ?? getApiClient(baseUrl, deps.getAuthToken);

  return {
    /**
     * List pets by status
     */
    listByStatus: (status: 'available' | 'pending' | 'sold') =>
      petEndpoints.findPetsByStatus(client, { status }),

    /**
     * Get pet details
     */
    getById: (petId: number) => petEndpoints.getPetById(client, petId),

    /**
     * Create a pet
     */
    create: (pet: Pet) => petEndpoints.addPet(client, pet),

    /**
     * Update a pet
     */
    update: (pet: Pet) => petEndpoints.updatePet(client, pet),

    /**
     * Remove a pet
     */
    remove: (petId: number) => petEndpoints.deletePet(client, petId),

    /**
     * Upload pet image
     */
    uploadImage: (petId: number, formData: FormData) =>
      petEndpoints.uploadPetImage(client, petId, formData),
  };
};


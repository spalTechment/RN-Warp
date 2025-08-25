// Endpoints for Pet resource, generated from config.api.endpoints.pets
import { AxiosInstance } from 'axios';
import { Pet } from '../models/Pet';
import { PET, PET_BY_ID, PET_FIND_BY_STATUS, PET_UPLOAD_IMAGE } from '../constants/ApiPaths';

export interface FindPetsByStatusParams {
  status: 'available' | 'pending' | 'sold';
}

export interface UploadImageResponse {
  code?: number;
  type?: string;
  message?: string;
}

/**
 * Fetch pets by status
 * @param client Axios instance
 * @param params status filter
 */
export const findPetsByStatus = async (
  client: AxiosInstance,
  params: FindPetsByStatusParams,
): Promise<Pet[]> => {
  const res = await client.get(PET_FIND_BY_STATUS, { params });
  return res.data as Pet[];
};

/**
 * Get a single pet by ID
 */
export const getPetById = async (
  client: AxiosInstance,
  petId: number,
): Promise<Pet> => {
  const res = await client.get(PET_BY_ID(petId));
  return res.data as Pet;
};

/**
 * Add a new pet
 */
export const addPet = async (
  client: AxiosInstance,
  pet: Pet,
): Promise<Pet> => {
  const res = await client.post(PET, pet);
  return res.data as Pet;
};

/**
 * Update a pet
 */
export const updatePet = async (
  client: AxiosInstance,
  pet: Pet,
): Promise<Pet> => {
  const res = await client.put(PET, pet);
  return res.data as Pet;
};

/**
 * Delete a pet by ID
 */
export const deletePet = async (
  client: AxiosInstance,
  petId: number,
): Promise<void> => {
  await client.delete(PET_BY_ID(petId));
};

/**
 * Upload an image for a pet
 */
export const uploadPetImage = async (
  client: AxiosInstance,
  petId: number,
  formData: FormData,
): Promise<UploadImageResponse> => {
  const res = await client.post(PET_UPLOAD_IMAGE(petId), formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data as UploadImageResponse;
};


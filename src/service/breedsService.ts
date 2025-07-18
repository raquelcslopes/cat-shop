import { backendAPI } from "../api";

export interface CatBreed {
  id: string;
  name: string;
  temperament: string;
  origin: string;
}

export const getBreeds = async (): Promise<CatBreed[]> => {
  const response = await backendAPI.get(`/breeds`);
  return response.data;
};

export const getBreedsImages = async (breedId: string): Promise<string[]> => {
  const response = await backendAPI.get(`/images/search?breed_ids=${breedId}`);
  return response.data;
};
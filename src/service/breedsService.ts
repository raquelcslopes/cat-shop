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

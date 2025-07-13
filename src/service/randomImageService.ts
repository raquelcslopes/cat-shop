import { backendAPI } from "../api/index";

interface CatApiResponse {
  url: string;
  id?: string;
  width?: number;
  height?: number;
}

export const getRandomImage = async (limit = 12): Promise<{ url: string }[]> => {
  const response = await backendAPI.get(`/images/search?limit=${limit}`);
  return response.data;
};

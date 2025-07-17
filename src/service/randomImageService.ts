import { backendAPI } from "../api/index";

export const getRandomImage = async (limit = 12): Promise<{ url: string }[]> => {
  const response = await backendAPI.get(`/images/search?limit=${limit}`);
  return response.data;
};

import axios from "axios";
import { IProduct, IFilters } from "../types";

const apiClient = axios.create({
  baseURL: "http://localhost:5005",
  timeout: 5000,
});

export const fetchProducts = async (filters: IFilters): Promise<IProduct[]> => {
  try {
    const params: Record<string, string | number> = {};
    if (filters.query) {
      params.title = filters.query;
    }
    if (filters.theme && filters.theme !== "All") {
      params.theme = filters.theme;
    }
    if (filters.tier && filters.tier !== "All") {
      params.tier = filters.tier;
    }
    if (filters.minPrice) {
      params.price_gte = filters.minPrice;
    }
    if (filters.maxPrice) {
      params.price_lte = filters.maxPrice;
    }

    const response = await apiClient.get<IProduct[]>("/products", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

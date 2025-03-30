import axios from "axios"
import { IProduct, IFilters } from "../types"
import { DEFAULT_LIMIT } from "../constants/paginate"
import { API_URL } from "../constants/env"

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

export const fetchProducts = async (filters: IFilters): Promise<{ nextPage: number | null; data: IProduct[] }> => {
  try {
    const params: Record<string, string | number> = {}
    if (filters.query) {
      params.title_like = filters.query
    }
    if (filters.theme && filters.theme !== "All") {
      params.theme = filters.theme
    }
    if (filters.tier && filters.tier !== "All") {
      params.tier = filters.tier
    }
    if (filters.minPrice) {
      params.price_gte = filters.minPrice
    }
    if (filters.maxPrice) {
      params.price_lte = filters.maxPrice
    }
    if (filters.time) {
      params._sort = "createdAt"
      params._order = filters.time === 1 ? "asc" : "desc"
    }
    if (filters.price) {
      params._sort += ",price"
      params._order += filters.price === 1 ? ",asc" : ",desc"
    }

    params._page = filters.page || 0
    params._limit = filters.limit || DEFAULT_LIMIT

    const response = await apiClient.get<IProduct[]>("/products", { params })
    const total = response.headers["x-total-count"]
    const currPage = filters.page || 0
    const currCount = (currPage + 1) * (filters.limit || DEFAULT_LIMIT)
    const nextPage = currCount > total ? null : currPage + 1
    return {
      data: response.data,
      nextPage,
    }
  } catch (error) {
    throw error
  }
}

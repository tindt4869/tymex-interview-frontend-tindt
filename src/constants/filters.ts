import { IFilters } from "../types";

export const DEFAULT_FILTERS: Required<IFilters> = {
  query: "",
  price: 1,
  time: -1,
  minPrice: 0.01,
  maxPrice: 200,
  theme: "All",
  tier: "All",
  page: 0,
  limit: 20,
};

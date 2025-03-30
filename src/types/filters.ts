import { Theme, Tier } from "./product";

export interface IFilters {
  query?: string;
  minPrice?: number;
  maxPrice?: number;
  theme?: Theme;
  tier?: Tier;
  time?: -1 | 1;
  price: -1 | 1;
  page?: number;
  limit?: number;
}

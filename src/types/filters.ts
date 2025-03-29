import { Theme, Tier } from "./product";

export type FilterTime = string;

export interface IFilters {
  query?: string;
  minPrice?: number;
  maxPrice?: number;
  theme?: Theme;
  tier?: Tier;
  time?: FilterTime;
}

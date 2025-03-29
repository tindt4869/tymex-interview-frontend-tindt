import { Author } from "./author";

export type Category = string;

export type Theme = string;

export type Tier = string;

export interface Product {
  id: number;
  title: string;
  category: Category;
  price: number;
  isFavorite: boolean;
  theme: Theme;
  tier: Tier;
  imageId: number;
  author: Author;
}

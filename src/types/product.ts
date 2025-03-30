import { IAuthor } from "./author"

export type Category =
  | "Upper Body"
  | "Lower Body"
  | "Hat"
  | "Shoes"
  | "Accessory"
  | "Legendary"
  | "Mythic"
  | "Epic"
  | "Rare"

export type Theme = "All" | "Dark" | "Light" | "Colorful" | "Halloween"

export type Tier = "All" | "Basic" | "Premium" | "Deluxe"

export interface IProduct {
  id: number
  title: string
  category: Category
  price: number
  isFavorite: boolean
  createdAt: number
  theme: Theme
  tier: Tier
  imageId: number
  author: IAuthor
}

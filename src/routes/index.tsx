import { createFileRoute } from "@tanstack/react-router";
import Marketplace from "../pages/Marketplace";
import * as v from "valibot";
import {
  PriceOptions,
  ThemeOptions,
  TierOptions,
  TimeOptions,
} from "../constants/product";
import { DEFAULT_LIMIT } from "../constants/paginate";

const productSearchSchema = v.object({
  query: v.optional(v.fallback(v.string(), ""), ""),
  tier: v.optional(v.fallback(v.picklist(TierOptions), "All"), "All"),
  theme: v.optional(v.picklist(ThemeOptions), "All"),
  time: v.optional(v.picklist(TimeOptions), -1),
  price: v.optional(v.picklist(PriceOptions), 1),
  minPrice: v.optional(
    v.pipe(v.number(), v.minValue(0.01), v.maxValue(200)),
    0.01
  ),
  maxPrice: v.optional(
    v.pipe(v.number(), v.minValue(0.01), v.maxValue(200)),
    200
  ),
  page: v.optional(v.fallback(v.number(), 0), 0),
  limit: v.optional(v.fallback(v.number(), DEFAULT_LIMIT), DEFAULT_LIMIT),
});

export const Route = createFileRoute("/")({
  component: Marketplace,
  validateSearch: productSearchSchema,
});

import { createFileRoute } from "@tanstack/react-router";
import Marketplace from "../pages/Marketplace";
import * as v from "valibot";
import { ThemeOptions, TierOptions } from "../constants/product";

const productSearchSchema = v.object({
  query: v.optional(v.fallback(v.string(), ""), ""),
  tier: v.optional(v.fallback(v.picklist(TierOptions), "All"), "All"),
  theme: v.optional(v.picklist(ThemeOptions), "All"),
  time: v.optional(v.fallback(v.string(), ""), ""),
  minPrice: v.optional(
    v.pipe(v.number(), v.minValue(0.01), v.maxValue(200)),
    0.01
  ),
  maxPrice: v.optional(
    v.pipe(v.number(), v.minValue(0.01), v.maxValue(200)),
    200
  ),
});

export const Route = createFileRoute("/")({
  component: Marketplace,
  validateSearch: productSearchSchema,
});

import { useEffect, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import { Slider, Select, Button } from "antd";
import { ThemeOptions, TierOptions } from "../constants/product";
import { IFilters } from "../types";

const { Option } = Select;

interface FiltersProps {
  onFilterChange: (filters: IFilters) => void;
}

const FiltersComponent: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const search = useSearch({ from: "/" });
  const [priceRange, setPriceRange] = useState<[number, number]>([
    search.minPrice,
    search.maxPrice,
  ]);
  const [theme, setTheme] = useState(search.theme);
  const [tier, setTier] = useState(search.tier);

  console.log(priceRange);

  useEffect(() => {
    const filters: IFilters = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      theme,
      tier,
    };
    onFilterChange(filters);
  }, [priceRange, theme, tier, onFilterChange]);

  return (
    <div className="filters">
      <h3>Filters</h3>
      <div>
        <label>Price (ETH)</label>
        <Slider
          range
          min={0.01}
          max={200}
          step={0.01}
          value={priceRange}
          onChange={(value) => setPriceRange(value as [number, number])}
        />
        <span>{priceRange} ETH</span>
      </div>
      <div>
        <label>Theme</label>
        <Select
          value={theme}
          onChange={(value) => setTheme(value)}
          style={{ width: "100%" }}
        >
          {ThemeOptions.map((opt) => {
            return <Option value={opt}>{opt}</Option>;
          })}
        </Select>
      </div>
      <div>
        <label>Tier</label>
        <Select
          value={tier}
          onChange={(value) => setTier(value || "")}
          style={{ width: "100%" }}
        >
          {TierOptions.map((opt) => {
            return <Option value={opt}>{opt}</Option>;
          })}
        </Select>
      </div>
      <Button
        type="primary"
        onClick={() => {
          setPriceRange([0.01, 200]);
          setTheme("All");
          setTier("All");
        }}
      >
        Reset Filter
      </Button>
    </div>
  );
};

export default FiltersComponent;

import { useEffect, useState } from "react"
import { useSearch } from "@tanstack/react-router"
import { Slider, Select, Button, SliderSingleProps, Input } from "antd"
import { PriceOptions, ThemeOptions, TierOptions, TimeOptions } from "../constants/product"
import Icon from "@ant-design/icons"
import DownIcon from "../assets/icons/down.svg?react"
import { IFilters } from "../types"
import { createStyles } from "antd-style"
import SearchInput from "./SearchInput"
import { DEFAULT_FILTERS } from "../constants/filters"

const useStyles = createStyles(() => ({
  select: {
    width: "100%",
    "& .ant-select-arrow": {
      color: "white",
    },
  },
  selectDropdown: {
    backgroundColor: "transparent",
  },
  filterItem: {
    marginTop: 24,
  },
  filterSubmitButton: {
    marginTop: 24,
  },
  sliderHelperText: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "#D6D6D6",
  },
}))

const { Option } = Select

const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (value) => `${value} ETH`

interface FiltersProps {
  onFilterChange: (filters: IFilters) => void
}

const FiltersComponent: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const { styles } = useStyles()
  const search = useSearch({ from: "/" })
  const [query, setQuery] = useState(search.query)
  const [priceRange, setPriceRange] = useState<[number, number]>([search.minPrice, search.maxPrice])
  const [theme, setTheme] = useState(search.theme)
  const [tier, setTier] = useState(search.tier)
  const [time, setTime] = useState(search.time)
  const [price, setPrice] = useState(search.price)

  useEffect(() => {
    const filters: IFilters = {
      query,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      theme,
      tier,
      time,
      price,
    }
    onFilterChange(filters)
  }, [priceRange, theme, tier, time, price, query, onFilterChange])

  const handleReset = () => {
    setTheme(DEFAULT_FILTERS.theme)
    setTier(DEFAULT_FILTERS.tier)
    setPrice(DEFAULT_FILTERS.price)
    setPriceRange([DEFAULT_FILTERS.minPrice, DEFAULT_FILTERS.maxPrice])
    setQuery(DEFAULT_FILTERS.query)
  }

  return (
    <div className='filters'>
      <SearchInput value={query} onSearch={(value) => setQuery(value)} />

      <div className={styles.filterItem}>
        <label>Price</label>
        <Slider
          range
          min={0.01}
          max={200}
          step={0.01}
          value={priceRange}
          onChange={(value) => setPriceRange(value as [number, number])}
          tooltip={{ formatter }}
        />
        <div className={styles.sliderHelperText}>
          <span>{priceRange[0]} ETH</span>
          <span>{priceRange[1]} ETH</span>
        </div>
      </div>
      <div className={styles.filterItem}>
        <label>Theme</label>
        <Select
          className={styles.select}
          value={theme}
          onChange={(value) => setTheme(value)}
          suffixIcon={<Icon component={DownIcon} />}
        >
          {ThemeOptions.map((opt) => {
            return <Option value={opt}>{opt}</Option>
          })}
        </Select>
      </div>
      <div className={styles.filterItem}>
        <label>Tier</label>
        <Select
          className={styles.select}
          value={tier}
          onChange={(value) => setTier(value || "")}
          suffixIcon={<Icon component={DownIcon} />}
        >
          {TierOptions.map((opt) => {
            return <Option value={opt}>{opt}</Option>
          })}
        </Select>
      </div>
      <div className={styles.filterItem}>
        <label>Time</label>
        <Select
          labelRender={({ value }) => (value === -1 ? "Latest" : "Oldest")}
          className={styles.select}
          value={time}
          onChange={(value) => setTime(value)}
          suffixIcon={<Icon component={DownIcon} />}
        >
          {TimeOptions.map((opt) => {
            return <Option value={opt}>{opt === -1 ? "Latest" : "Oldest"}</Option>
          })}
        </Select>
      </div>
      <div className={styles.filterItem}>
        <label>Price</label>
        <Select
          labelRender={({ value }) => (value === 1 ? "Low to high" : "High to low")}
          className={styles.select}
          value={price}
          onChange={(value) => setPrice(value)}
          suffixIcon={<Icon component={DownIcon} />}
        >
          {PriceOptions.map((opt) => {
            return <Option value={opt}>{opt === 1 ? "Low to high" : "High to low"}</Option>
          })}
        </Select>
      </div>
      <Button className={styles.filterSubmitButton} type='primary' onClick={handleReset}>
        Reset Filter
      </Button>
    </div>
  )
}

export default FiltersComponent

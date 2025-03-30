import debounce from "lodash/debounce"
import { useCallback, useEffect, useState } from "react"
import { Input } from "antd"
import Icon from "@ant-design/icons"
import SearchIcon from "../assets/icons/search.svg?react"

interface SearchInputProps {
  value?: string
  placeholder?: string
  onSearch: (value: string) => void
  delay?: number
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onSearch, delay = 500 }) => {
  const [searchTerm, setSearchTerm] = useState(value || "")

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      onSearch(term)
    }, delay),
    [onSearch, delay]
  )

  useEffect(() => {
    if (value === "") {
      setSearchTerm(value)
    }
  }, [value])

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    debouncedSearch(value)
  }

  return (
    <Input
      placeholder='Quick search'
      prefix={<Icon component={SearchIcon} />}
      value={searchTerm}
      onChange={handleChange}
    />
  )
}

export default SearchInput

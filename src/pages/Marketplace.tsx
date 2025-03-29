import { useQuery } from "@tanstack/react-query";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { Row, Col } from "antd";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../api/productApi";
import { IProduct, IFilters } from "../types";

const Marketplace: React.FC = () => {
  const search = useSearch({ from: "/" }) as IFilters;
  const navigate = useNavigate({ from: "/" });

  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["products", search],
    queryFn: () => fetchProducts(search),
  });

  const handleFilterChange = (filters: IFilters) => {
    navigate({
      search: (prevFilters: IFilters) => ({ ...prevFilters, ...filters }),
    });
  };

  return (
    <div className="marketplace">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Filters onFilterChange={handleFilterChange} />
        </Col>
        <Col xs={24} md={18}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ProductList products={products || []} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Marketplace;

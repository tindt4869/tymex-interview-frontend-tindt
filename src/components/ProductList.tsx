import { Row, Col } from "antd";
import ProductCard from "./ProductCard";
import { IProduct } from "../types";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;

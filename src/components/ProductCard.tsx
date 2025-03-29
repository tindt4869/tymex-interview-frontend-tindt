import { Card } from "antd";
import { IProduct } from "../types";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      hoverable
      cover={
        <img alt={product.title} src={`./images/${product.imageId}.png`} />
      }
    >
      <Card.Meta title={product.title} description={`${product.price} ETH`} />
      <p>{product.tier}</p>
    </Card>
  );
};

export default ProductCard;

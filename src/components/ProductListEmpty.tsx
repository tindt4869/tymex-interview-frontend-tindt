import { Typography } from "antd";

const { Text } = Typography;

const ProductListEmpty = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Text>No products found.</Text>
    </div>
  );
};

export default ProductListEmpty;

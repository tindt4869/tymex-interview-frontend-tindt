import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ProductListPending = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Spin size="large" indicator={<LoadingOutlined spin />} />
    </div>
  );
};

export default ProductListPending;

import Icon from "@ant-design/icons";
import EthereumIcon from "../assets/icons/ethereum.svg?react";
import { createStyles } from "antd-style";

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
}));

interface Props {
  price: number;
}

const ProductPrice: React.FC<Props> = ({ price }) => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <Icon style={{ fontSize: 13 }} component={EthereumIcon} />
      {price} ETH
    </div>
  );
};

export default ProductPrice;

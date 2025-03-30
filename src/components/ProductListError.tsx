import { Typography } from "antd";
import { createStyles } from "antd-style";

const { Text } = Typography;

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

interface Props {
  message: string;
}

const ProductListError: React.FC<Props> = ({ message }) => {
  const { styles } = useStyles();
  return (
    <div className={styles.container}>
      <Text>Oops! Something went wrong. Please try again later.</Text>
      <Text type="danger">{message}</Text>
    </div>
  );
};

export default ProductListError;

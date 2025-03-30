import { Card } from "antd"
import CardCover from "./CardCover"
import { IProduct } from "../types"
import { createStyles } from "antd-style"
import CardCategory from "./CardCategory"
import CardFavorite from "./CardFavorite"
import CardAuthor from "./CardAuthor"
import ProductPrice from "./ProductPrice"

const useStyles = createStyles(() => ({
  cardCoverInner: {
    position: "absolute",
    top: 8,
    left: 8,
    right: 8,
    boxSizing: "border-box",
    width: "calc(100% - 16px)",
    display: "flex",
    justifyContent: "space-between",
  },
  cardMeta: {
    "& .ant-card-meta-detail": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .ant-card-meta-title": {
      color: "white",
      fontWeight: "400",
      marginBottom: "0 !important",
    },
    "& .ant-card-meta-description": {
      color: "white",
      fontSize: 14,
      whiteSpace: "nowrap",
    },
  },
}))

interface ProductCardProps {
  product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { styles } = useStyles()
  return (
    <Card
      variant='borderless'
      hoverable
      cover={
        <CardCover alt={product.title} src={`./images/${product.imageId}.png`}>
          <div className={styles.cardCoverInner}>
            <CardCategory category={product.category} />
            <CardFavorite />
          </div>
        </CardCover>
      }
    >
      <Card.Meta
        title={product.title}
        description={<ProductPrice price={product.price} />}
        className={styles.cardMeta}
      />

      <CardAuthor author={product.author} />
    </Card>
  )
}

export default ProductCard

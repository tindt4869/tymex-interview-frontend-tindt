import React from "react";
import { createStyles } from "antd-style";
import { colors } from "../theme/colors";

const useStyles = createStyles(() => ({
  container: {
    backgroundColor: colors.overlay,
    borderRadius: 4,
    padding: "0.25rem 0.75rem",
    fontSize: 12,
  },
}));

interface Props {
  category: string;
}

const CardCategory: React.FC<Props> = ({ category }) => {
  const { styles } = useStyles();

  return <div className={styles.container}>{category}</div>;
};

export default CardCategory;

import React, { PropsWithChildren } from "react";
import { getRandomBgColor } from "../theme/gradient";
import { createStyles } from "antd-style";

const useStyles = createStyles(() => ({
  container: {
    padding: 16,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    background: getRandomBgColor(),
    borderRadius: 4,
    overflow: "hidden",
  },
  img: {
    marginTop: 36,
    width: "100%",
  },
}));

interface Props {
  alt: string;
  src: string;
}

const CardCover: React.FC<PropsWithChildren<Props>> = ({
  alt,
  src,
  children,
}) => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {children}
        <img className={styles.img} alt={alt} src={src} />
      </div>
    </div>
  );
};

export default CardCover;

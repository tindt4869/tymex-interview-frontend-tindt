import { createStyles } from "antd-style"
import { PropsWithChildren } from "react"

const useStyles = createStyles(() => ({
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0 1rem",
    "@media (min-width: 576px)": { maxWidth: "576px" },
    "@media (min-width: 768px)": { maxWidth: "768px" },
    "@media (min-width: 992px)": { maxWidth: "992px" },
    "@media (min-width: 1200px)": { maxWidth: "1200px" },
  },
}))

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles()
  return <div className={styles.container}>{children}</div>
}

export default Container

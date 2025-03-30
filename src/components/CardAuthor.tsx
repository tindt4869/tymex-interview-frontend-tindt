import React from "react"
import { Avatar, Badge } from "antd"
import { createStyles } from "antd-style"
import Icon from "@ant-design/icons"
import VerifiedIcon from "../assets/icons/verified.svg?react"
import { IAuthor } from "../types"

const useStyles = createStyles(() => ({
  container: {
    marginTop: 16,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  authorName: {
    fontSize: 12,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}))

interface Props {
  author: IAuthor
}

const CardAuthor: React.FC<Props> = ({ author }) => {
  const { styles } = useStyles()

  return (
    <div className={styles.container}>
      <Badge count={<Icon style={{ fontSize: 12 }} component={VerifiedIcon} />} offset={[-6, 26]}>
        <Avatar style={{ backgroundColor: "white" }} src={author.avatar} />
      </Badge>
      <div className={styles.authorName}>{author.firstName + " " + author.lastName}</div>
    </div>
  )
}

export default CardAuthor

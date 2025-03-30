import React from "react";
import { Row, Col, Input, Button, Typography, Space, Divider } from "antd";
import Icon from "@ant-design/icons";
import { createStyles } from "antd-style";
import MessageIcon from "../assets/icons/comment.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import { colors } from "../theme/colors";

const useStyles = createStyles(() => ({
  texture: {
    width: "100%",
    aspectRatio: 4.5,
    backgroundImage: "url(/images/texture.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: 56,
  },
  footer: {
    backgroundColor: "#17161A",
  },
  container: {
    boxSizing: "content-box",
    maxWidth: 1200,
    margin: "0 auto",
    paddingTop: 60,
    paddingBottom: 208,
    paddingLeft: 16,
    paddingRight: 16,
  },
  sectionTitle: {
    textTransform: "uppercase",
    fontFamily: `"Share Tech", sans-serif`,
    marginBottom: `32px !important`,
  },
  navigationColums: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    rowGap: 12,
  },
  navigationItem: {
    "& a": {
      color: "white",
      fontWeight: 400,
      fontSize: 16,
    },
    "&:hover a": {
      color: colors.primary,
    },
  },
  divider: {
    borderBlockStartColor: "#3A3841",
    marginTop: 60,
    marginBottom: 40,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    "& + &": {
      marginTop: 32,
    },
  },
  subscribe: {
    display: "flex",
    gap: 16,
  },
  copyRightSection: {
    "@media(max-width: 768px)": {
      "& > div:first-child": {
        order: 2,
      },
    },
  },
  policy: {
    display: "flex",
    justifyContent: "flex-end",
    "@media(max-width: 768px)": {
      justifyContent: "flex-start",
    },
  },
}));

const { Title, Text, Link } = Typography;

const navigation = [
  { title: "Home", href: "#" },
  { title: "Whitepaper", href: "#" },
  { title: "FAQs", href: "#" },
  { title: "About us", href: "#" },
  { title: "Marketplace", href: "#" },
  { title: "News", href: "#" },
  { title: "Our teams", href: "#" },
  { title: "Roadmap", href: "#" },
  { title: "Community", href: "#" },
];

const legalLinks = [
  { title: "Security", href: "#" },
  { title: "Legal", href: "#" },
  { title: "Privacy", href: "#" },
];

const Footer: React.FC = () => {
  const { styles } = useStyles();

  return (
    <>
      <div className={styles.texture}></div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <Row gutter={[32, 48]}>
            <Col xs={24} md={12} lg={10}>
              <Title level={3} className={styles.sectionTitle}>
                Navigation
              </Title>

              <div className={styles.navigationColums}>
                {navigation.map((item) => (
                  <div key={item.title} className={styles.navigationItem}>
                    <Link key={item.title} href={item.href}>
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </Col>

            <Col xs={24} md={12} lg={5}>
              <Title level={3} className={styles.sectionTitle}>
                Contact us
              </Title>
              <div>
                <div className={styles.contactItem}>
                  <Icon style={{ fontSize: 24 }} component={PhoneIcon} />
                  <Text>01234568910</Text>
                </div>
                <div className={styles.contactItem}>
                  <Icon style={{ fontSize: 24 }} component={MessageIcon} />
                  <Text>tymex-talent@tyme.com</Text>
                </div>
              </div>
            </Col>

            <Col xs={24} md={12} lg={9}>
              <Title level={3} className={styles.sectionTitle}>
                Subcribe to receive our latest update
              </Title>
              <div className={styles.subscribe}>
                <Input placeholder="Your email address" />
                <Button type="primary">Subscribe</Button>
              </div>
            </Col>
          </Row>

          <Divider className={styles.divider} />

          <Row
            className={styles.copyRightSection}
            justify="space-between"
            align="middle"
            gutter={[0, 16]}
          >
            <Col xs={24} md={12}>
              <Text>©2023 Tyme - Edit. All Rights reserved.</Text>
            </Col>
            <Col xs={24} md={12}>
              <Space size={24} className={styles.policy}>
                {legalLinks.map((link) => (
                  <div className={styles.navigationItem}>
                    <Link key={link.title} href={link.href}>
                      {link.title}
                    </Link>
                  </div>
                ))}
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { useState } from "react"
import { Button, Drawer, Menu, Space, Dropdown } from "antd"
import Icon, { MenuOutlined } from "@ant-design/icons"
import { createStyles } from "antd-style"
import WorldIcon from "../assets/icons/world.svg?react"
import DownIcon from "../assets/icons/down.svg?react"

const useStyles = createStyles(({ css }) => ({
  nav: css`
    background-color: rgba(23, 22, 26, 0.7);
    backdrop-filter: blur(10px);
    padding: 16px 24px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: none;
      gap: 60px;
      align-items: center;

      @media (min-width: 1101px) {
        display: flex;
      }
    }

    .mobile-menu {
      @media (min-width: 1101px) {
        display: none;
      }
    }

    .nav-link {
      font-family: "Drone Ranger Pro", sans-serif;
      font-weight: 700;
      font-size: 14px;
      color: white;
      text-transform: uppercase;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      &.active {
        background: linear-gradient(135deg, #da458f 0%, #da34dd 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .connect-wallet {
      background: linear-gradient(135deg, #da458f 0%, #da34dd 100%);
      color: white;
      border: none;
      box-shadow: 0px 0px 50px rgba(187, 75, 255, 0.32);
      height: 40px;
      padding: 0 24px;

      &:hover {
        opacity: 0.9;
        color: white;
      }
    }

    .language-selector {
      display: flex;
      align-items: center;
      gap: 4px;
      color: white;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
      }
    }
  `,
  drawer: css`
    .ant-drawer-content {
      background-color: #17161a;
    }

    .ant-drawer-header {
      border-bottom: 1px solid #3a3841;

      .ant-drawer-title {
        color: white;
      }
    }

    .ant-drawer-body {
      padding: 0;
    }

    .ant-menu {
      background: transparent;
      border: none;

      .ant-menu-item {
        font-family: "Drone Ranger Pro", sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: white;
        text-transform: uppercase;

        &:hover {
          color: #da458f;
        }

        &.ant-menu-item-selected {
          background: transparent;
          color: #da34dd;
        }
      }
    }
  `,
  languageSelector: {
    display: "flex",
    gap: 8,
  },
  navRight: {
    "@media (max-width: 1100px)": {
      width: "100%",
      justifyContent: "flex-end",
      "& .ant-space-item:nth-child(3)": {
        display: "flex",
        // flex: 1,
        justifyContent: "flex-end",
      },
    },
  },
}))

const navigationItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About us" },
  { key: "teams", label: "Our teams" },
  { key: "marketplace", label: "Marketplace" },
  { key: "roadmap", label: "Roadmap" },
  { key: "whitepaper", label: "Whitepaper" },
]

const languageOptions = [
  { key: "en", label: "English" },
  { key: "vi", label: "Tiếng Việt" },
  { key: "kr", label: "한국어" },
]

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")
  const { styles } = useStyles()

  const languageMenu = {
    items: languageOptions.map((lang) => ({
      key: lang.key,
      label: lang.label,
    })),
    onClick: ({ key }: { key: string }) => {
      setSelectedLanguage(key.toUpperCase())
    },
  }

  return (
    <nav className={styles.nav}>
      <div className='nav-content'>
        {/* <div style={{ width: 40, height: 40, background: "#fff" }} /> */}

        <div className='nav-links'>
          {navigationItems.map((item) => (
            <span key={item.key} className={`nav-link ${item.key === "marketplace" ? "active" : ""}`}>
              {item.label}
            </span>
          ))}
        </div>

        <Space className={styles.navRight} size={24}>
          <Button type='primary' className='connect-wallet'>
            Connect Wallet
          </Button>

          <Dropdown menu={languageMenu} placement='bottom'>
            <div className={styles.languageSelector}>
              <Icon style={{ fontSize: 24 }} component={WorldIcon} />
              <Icon component={DownIcon} />
            </div>
          </Dropdown>

          <Button
            className='mobile-menu'
            type='text'
            icon={<MenuOutlined style={{ color: "white", fontSize: 24 }} />}
            onClick={() => setMobileMenuOpen(true)}
          />
        </Space>
      </div>
      <Drawer
        className={styles.drawer}
        title='Menu'
        placement='right'
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={300}
      >
        <Menu
          mode='vertical'
          selectedKeys={["marketplace"]}
          items={navigationItems.map((item) => ({
            key: item.key,
            label: item.label,
          }))}
        />
      </Drawer>
    </nav>
  )
}

export default Header

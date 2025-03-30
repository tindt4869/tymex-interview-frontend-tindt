import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontFamily: "Inter",
    colorText: "white",
  },
  components: {
    Button: {
      colorPrimary: "linear-gradient(-75deg, #DA458F, #DA34DD)",
      primaryShadow: "none",
      defaultBg: "linear-gradient(90deg, #DA458F, #DA34DD)",
      defaultShadow: "none",
      defaultColor: "#fff",
      lineWidth: 0,
      colorPrimaryHover: "linear-gradient(-75deg, #DA458F, #DA34DD)",
      colorPrimaryActive: "linear-gradient(-75deg, #DA458F, #DA34DD)",
      lineHeight: 1.5,
      paddingContentHorizontal: 16,
      paddingContentVertical: 10,
      controlHeight: 44,
      borderRadius: 4,
      colorTextDisabled: "#d9d9d9",
      colorBgContainerDisabled: "#d872a5",
    },
    Card: {
      borderRadius: 10,
      bodyPadding: 16,
      colorText: "white",
      colorBgContainer: "rgba(49, 59, 69, 0.5)",
    },
  },
};

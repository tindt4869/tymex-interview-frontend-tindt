import { theme } from "./theme/theme";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ConfigProvider } from "antd";
import Footer from "./components/Footer";
import "antd/dist/reset.css";
import "./index.css";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Outlet />
        <div>
          <Footer />
        </div>
        <TanStackRouterDevtools />
      </div>
    </ConfigProvider>
  );
}

export default App;

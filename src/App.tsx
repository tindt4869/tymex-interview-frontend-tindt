import { theme } from "./theme/theme";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ConfigProvider, Layout } from "antd";
import Footer from "./components/Footer";
import "antd/dist/reset.css";
import "./index.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Hero from "./components/Hero";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
        <Container>
          <Outlet />
        </Container>
        <Footer />
        <TanStackRouterDevtools />
      </div>
    </ConfigProvider>
  );
}

export default App;

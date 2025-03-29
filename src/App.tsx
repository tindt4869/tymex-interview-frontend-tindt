import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "antd/dist/reset.css";

function App() {
  return (
    <div className="App">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}

export default App;

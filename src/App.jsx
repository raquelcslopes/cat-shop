import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import routes from "../src/routes/index";
import "./App.css";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <title>ARISTOCATS</title>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;

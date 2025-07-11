import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import TopFavoritePage from "../pages/TopFavoritesPage/index.tsx";
import ShopNow from "../pages/ShopNowPage/index.tsx";
import BreedsPage from "../pages/BreedPage/index.tsx";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/shop-now",
        element: <ShopNow />,
      },
      {
        path: "/breed",
        element: <BreedsPage />,
      },
      {
        path: "/top-favorites",
        element: <TopFavoritePage />,
      },
    ],
  },
];

export default routes;

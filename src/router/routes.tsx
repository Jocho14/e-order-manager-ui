import { lazy } from "react";

const Main = lazy(() => import("../layout/Main"));
const HomePage = lazy(() => import("../pages/HomePage"));
const BrowsePage = lazy(() => import("../pages/BrowsePage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));

const AccountPage = lazy(() => import("../pages/AccountPage"));
const ManagementPage = lazy(() => import("../pages/ManagementPage"));

const CartPage = lazy(() => import("../pages/CartPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));

const AuthPage = lazy(() => import("../pages/AuthPage"));

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "browse", element: <BrowsePage /> },
      { path: "product/:productId", element: <ProductDetailPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "management", element: <ManagementPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
  { path: "auth", element: <AuthPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;

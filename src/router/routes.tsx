import React from "react";
import { lazy } from "react";

const Main = lazy(() => import("../layout/Main"));
const HomePage = lazy(() => import("../pages/HomePage"));
const BrowsePage = lazy(() => import("../pages/BrowsePage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));

const AccountPage = lazy(() => import("../pages/AccountPage"));
const ManagementPage = lazy(() => import("../pages/ManagementPage"));

const CartPage = lazy(() => import("../pages/CartPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));

const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "browse", element: <BrowsePage /> },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "management", element: <ManagementPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "signIn", element: <SignInPage /> },
      { path: "signUp", element: <SignUpPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;

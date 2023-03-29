// css
import "./App.css"

// react
import { useEffect } from "react"

// redux
import { useDispatch } from "react-redux"
import { authActions } from "./store/authSlice"

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/rootLayout/RootLayout"
import HomePage from "./pages/homePage/HomePage"
import ProductsListPage, {
  loader as productsListLoader,
} from "./pages/listPage/ProductsListPage"
import ProductPage, {
  loader as productLoader,
  action as productDelete,
} from "./pages/productPage/ProductPage"
import NewProductPage from "./pages/addProductPage/NewProductPage"
import { action as addNewProduct } from "./components/main/newProductForm/NewProductForm"

import InformationPage from "./pages/productPage/InformationPage"
import ErrorPage from "./pages/errorPage/ErrorPage"
import OrderPage from "./pages/orderPage/orderPage"
import AuthPage from "./pages/authPage/AuthPage"
import { auth } from "./config/firebase"
import ProfilePage from "./pages/profilePage/ProfilePage"
import { info } from "./store/authActions"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authActions.isLogedInCheck())
    dispatch(info())
  }, [dispatch])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        // home page
        { index: true, element: <HomePage /> },
        // information
        { path: "auth", element: <AuthPage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "order", element: <OrderPage /> },
        // products
        {
          path: ":category",
          errorElement: <ErrorPage />,
          // products list page
          children: [
            {
              index: true,
              loader: productsListLoader,
              element: <ProductsListPage />,
            },

            {
              // product page
              path: ":productId",
              id: "product-detail",
              loader: productLoader,
              action: productDelete,
              element: <ProductPage />,
              // info detail in product page
              children: [
                {
                  path: ":productinfo",
                  element: <InformationPage />,
                },
              ],
            },
            {
              path: "add-product",
              element: <NewProductPage />,
              action: addNewProduct,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App

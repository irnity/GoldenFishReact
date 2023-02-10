// css
import "./App.css"

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/rootLayout/RootLayout"
import HomePage from "./pages/homePage/HomePage"
import ProductsListPage, {
  loader as productsListLoader,
} from "./pages/listPage/ProductsListPage"
import ProductPage, {
  loader as prooductLoader,
  action as productDelete,
} from "./pages/productPage/ProductPage"
import NewProductPage from "./pages/addProductPage/NewProductPage"
import { action as addNewProduct } from "./components/main/newProductForm/NewProductForm"

// import { fetchProductsData } from "./store/products-actions"
// import { useDispatch } from "react-redux"
// import { useEffect } from "react"

import InformationPage from "./pages/productPage/InformationPage"
import ErrorPage from "./pages/errorPage/ErrorPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        // home page
        { index: true, element: <HomePage /> },
        {
          // products page
          path: ":category",
          errorElement: <ErrorPage />,

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
              // load
              loader: prooductLoader,
              action: productDelete,
              element: <ProductPage />,
              children: [
                {
                  path: "all",
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

// const productsList = {
//   index: true,
//   loader: productsListLoader,
//   element: <ProductsListPage />,
// }

// css
import "./App.css"

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"
import ProductsListPage, {
  loader as productsListLoader,
} from "./pages/ProductsListPage"
import ProductPage, {
  loader as prooductLoader,
  action as productDelete,
} from "./pages/ProductPage"
import NewProductPage from "./pages/NewProductPage"
import { action as addNewProduct } from "./components/main/NewProductForm"

// import { fetchProductsData } from "./store/products-actions"
// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
import ErrorPage from "./store/ErrorPage"
import InformationPage from "./pages/aboutProduct/InformationPage"

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchProductsData())
  // }, [dispatch])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        // home page
        { index: true, element: <HomePage /> },
        {
          // products page
          path: "products",
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
        {
          path: "hooks",
          loader: productsListLoader,
          element: <ProductsListPage />,
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

// css
import "./App.css"

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"
import ProductsListPage from "./pages/ProductsListPage"
import ProductPage from "./pages/ProductPage"
import NewProductPage from "./pages/NewProductPage"
import { action as addNewProduct } from "./components/main/NewProductForm"

import { fetchProductsData } from "./store/products-actions"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [dispatch])
  
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
          children: [
            { index: true, element: <ProductsListPage /> },
            {
              // product page
              path: ":productId",
              id: "product-detail",
              element: <ProductPage />,
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

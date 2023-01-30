// css
import "./App.css"

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"
import ProductsListPage from "./pages/ProductsListPage"
import ProductPage from "./pages/ProductPage"

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
          path: "products",
          element: <ProductsListPage />,
        },
        {
          // product page
          path: "products/:product",
          element: <ProductPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App

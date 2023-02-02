import { Outlet, useRouteLoaderData } from "react-router-dom"
import Product from "../components/main/Product"

function ProductPage() {
  const data = useRouteLoaderData("product-detail")
  return (
    <>
      <Product product={data} /> <Outlet />
    </>
  )
}

export default ProductPage

export async function loader({ params }) {
  const id = params.productId
  const fetchData = async () => {
    const response = await fetch(
      `https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`
    )
    if (!response.ok) {
      throw new Error("could not fetch card data")
    }
    const data = await response.json()
    return data
  }
  try {
    const productData = await fetchData()
    return productData
  } catch (error) {
    console.log(error)
  }
}

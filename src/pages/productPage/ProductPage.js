import { json, Outlet, redirect, useRouteLoaderData } from "react-router-dom"
import Product from "../../components/main/product/Product"

function ProductPage() {
  const data = useRouteLoaderData("product-detail")
  return (
    <>
      <Product product={data} /> <Outlet />
    </>
  )
}

export default ProductPage

export async function loader({ request, params }) {
  const id = params.productId
  const url = new URL(request.url)
  const categoryName = url.pathname.split("/")[1].toString()

  const fetchData = async () => {
    const response = await fetch(
      `https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/${categoryName}/${id}.json`
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

// delete product
export async function action({ request, params }) {
  const productId = params.productId
  const response = await fetch(
    `https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`,
    {
      // method we get from productItem submit()
      method: request.method,
    }
  )

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    )
  } else {
    return redirect("/products")
  }
}

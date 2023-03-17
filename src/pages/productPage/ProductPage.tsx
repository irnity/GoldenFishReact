import { collection, doc, getDoc } from "firebase/firestore"
import { FunctionComponent } from "react"
import { json, Outlet, redirect, useRouteLoaderData } from "react-router-dom"
import Product from "../../components/main/product/Product"
import { db } from "../../config/firebase"

interface ProductPageProps {}

const ProductPage: FunctionComponent<ProductPageProps> = () => {
  const data = useRouteLoaderData("product-detail") as {
    description: string
    title: string
    image: string
    price: number
    code: string
    inStock: string
  }
  return (
    <>
      <Product product={data} /> <Outlet />
    </>
  )
}

export default ProductPage

interface request {
  url: string | URL
  method: string
}
interface params {
  productId?: any
}

export async function loader({
  request,
  params,
}: {
  request: request
  params: params
}) {
  const id = params.productId
  const url = new URL(request.url)
  const categoryName = url.pathname.split("/")[1].toString()
  try {
    // get one doc
    const productsCollectionRef = doc(db, `${categoryName}`, `${id}`)
    // doc
    const data = await getDoc(productsCollectionRef)
    // doc to data
    const filteredData = data.data()
    return filteredData
  } catch (err) {
    console.error(err)
  }
}

// delete product
export async function action({
  request,
  params,
}: {
  request: request
  params: params
}) {
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

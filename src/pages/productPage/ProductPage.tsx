import { collection, deleteDoc, doc, getDoc } from "firebase/firestore"
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
    // path to document
    const productsCollectionRef = doc(
      db,
      "store",
      `${categoryName}`,
      "items",
      `${id}`
    )

    // get document
    const data = await getDoc(productsCollectionRef)

    // document to data
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
  const id = params.productId
  const url = new URL(request.url)
  const categoryName = url.pathname.split("/")[1].toString()

  const productsCollectionRef = doc(
    db,
    "store",
    `${categoryName}`,
    "items",
    `${id}`
  )

  try {
    await deleteDoc(productsCollectionRef)
  } catch (err) {
    console.error(err)
  }

  return redirect("/products")
}

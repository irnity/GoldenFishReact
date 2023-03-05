import { useLoaderData } from "react-router-dom"
import Main from "../../components/main/mainBox/Main"

import { productsActions } from "../../store/productsSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function ProductsList() {
  const data = useLoaderData()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsActions.replaceProducts(data))
  }, [data, dispatch])

  return <Main />
}

export default ProductsList

// need fix types
export async function loader({ request }: any) {
  const url = new URL(request.url)
  const path = url.pathname
  // get last path name
  // const href = url.href.split("/").pop().toString()
  // console.log(path, href)
  const fetchData = async () => {
    const response = await fetch(
      `https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/${path}.json`
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

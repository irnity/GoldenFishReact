import { useLoaderData } from "react-router-dom"
import Main from "../components/main/Main"

import { productsActions } from "../store/productsSlice"
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

export async function loader() {
  const fetchData = async () => {
    const response = await fetch(
      "https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/products.json"
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

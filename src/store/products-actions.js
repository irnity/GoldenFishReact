// dont work with router
// import { productsActions } from "./productsSlice"

// export const fetchProductsData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/products.json"
//       )
//       if (!response.ok) {
//         throw new Error("could not fetch card data")
//       }
//       const data = await response.json()
//       return data
//     }
//     try {
//       const productData = await fetchData()
//       dispatch(productsActions.replaceProducts(productData))
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

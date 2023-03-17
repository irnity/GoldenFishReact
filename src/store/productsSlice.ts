import { createSlice } from "@reduxjs/toolkit"
import { ProductSliceProps } from "./model"

const initialProductsState: ProductSliceProps = {
  products: [],
  loaded: false,
}

const productSlice = createSlice({
  name: "Products",
  initialState: initialProductsState,
  reducers: {
    replaceProducts(state, actions) {
      // our data from fetch firebase

      // check if data is loaded
      // delete data if we have one

      state.products = []
      // get fetch data from payload
      const data = actions.payload

      const item = data.map((a: any) => a[0])
      const id = data.map((a: any) => a[1])

      for (const key in item) {
        state.products.push({
          id: id[key],
          code: item[key].code,
          title: item[key].title,
          image: item[key].image,
          price: item[key].price,
          description: item[key].description,
          isStock: item[key].inStock,
        })
      }
    },
    // should delete this
    addProduct(state) {
      state.loaded = false
    },
    // should delete this
    removeProduct(state) {
      state.loaded = false
    },
  },
})

export const productsActions = productSlice.actions

export default productSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const initialProductsState = {
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
      for (const key in data) {
        state.products.push({
          id: key,
          code: data[key].code,
          title: data[key].title,
          image: data[key].image,
          price: data[key].price,
          description: data[key].description,
          isStock: data[key].inStock,
        })
      }
    },
    // should delete this
    addProduct(state, actions) {
      state.loaded = false
    },
    // should delete this
    removeProduct(state, actions) {
      state.loaded = false
    },
  },
})

export const productsActions = productSlice.actions

export default productSlice.reducer

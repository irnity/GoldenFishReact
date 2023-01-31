import { createSlice } from "@reduxjs/toolkit"

const initialProductsState = {
  products: [],
}

const productSlice = createSlice({
  name: "Products",
  initialState: initialProductsState,
  reducers: {
    replaceProducts(state, actions) {
      // state.products = actions.products
      state.products = actions.payload
    },
    addProduct(state, actions) {
      const newProduct = actions.payload
      state.products.push({
        id: Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1),
        title: newProduct.title,
        price: newProduct.price,
        description: newProduct.description,
      })
    },
    removeProduct(state, actions) {
      // get product id
      const productId = actions.payload
      // find product with this id
      const exisingProduct = state.products.find(
        (product) => product.id === productId
      )
      // if there only 1 product deletes it
      if (exisingProduct.quantity === 1) {
        state.products = state.products.filter(
          (product) => product.id !== productId
        )
      }
      // if there more then 1 product in stash -1
      else {
        exisingProduct.inStock--
      }
    },
  },
})

export const productsActions = productSlice.actions

export default productSlice.reducer

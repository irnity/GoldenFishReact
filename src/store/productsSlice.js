import { createSlice } from "@reduxjs/toolkit"

const initialProductsState = {
  products: [],
}

const productSlice = createSlice({
  name: "Products",
  initialState: initialProductsState,
  reducers: {
    replaceProducts(state, actions) {
      // our data from fetch firebase
      const data = actions.payload
      for (const key in data) {
        state.products.push({
          id: key,
          title: data[key].title,
          image: data[key].image,
          price: data[key].price,
          description: data[key].description,
          isStock: data[key].inStock,
        })
      }
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

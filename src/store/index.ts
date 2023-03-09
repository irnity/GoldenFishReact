import { configureStore } from "@reduxjs/toolkit"
import basketSlice from "./basketSlice"
import productsSlice from "./productsSlice"

const store = configureStore({
  reducer: {
    products: productsSlice,
    basket: basketSlice,
  },
})

export default store

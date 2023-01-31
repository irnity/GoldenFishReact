import { createSlice } from "@reduxjs/toolkit"

const initialProductsState = [
  {
    id: "p1",
    title: "Test",
    price: 5,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "VOV",
    price: 10,
    description: "This is a second product - amazing!",
  },
  {
    id: "p3",
    title: "VOV",
    price: 10,
    description: "This is a second product - amazing!",
  },
]

const productSlice = createSlice({
  name: "Products",
  initialState: initialProductsState,
  reducers: {},
})

export const productsActions = productSlice.actions

export default productSlice.reducer

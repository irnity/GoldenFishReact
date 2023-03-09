import { createSlice } from "@reduxjs/toolkit"
import { BasketSliceProps } from "./model"

const initialBasketState: BasketSliceProps[] = [
  {
    code: "p1",
    description: "This is a first product - amazing!",
    image: "https://i.flagman.kiev.ua/goods/1784/1784645.jpg",
    amountToBuy: 1,
    price: 5,
    title: "Фідерне вудлище Flagman Mantaray Pro Feeder 3.6м 100г",
  },
  {
    code: "p2",
    description: "This is a first product - amazing!",
    image: "https://i.flagman.kiev.ua/goods/1784/1784645.jpg",
    amountToBuy: 1,
    price: 5,
    title: "Фідерне вудлище Flagman Mantaray Pro Feeder 3.6м 100г",
  },
]

const basketSlice = createSlice({
  name: "Basket",
  initialState: initialBasketState,
  reducers: {
    // addProductToBasket(state) {
    //   state = [...state]
    // },
  },
})

export const basketActions = basketSlice.actions

export default basketSlice.reducer

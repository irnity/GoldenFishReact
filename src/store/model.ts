export interface ProductSliceProps {
  products: {
    id: string
    code: string | undefined
    title: string
    image: string
    price: number | string
    description: string
    isStock: string
  }[]
  loaded: boolean
}

export interface BasketSliceProps {
  code: string
  description: string
  image: string
  amountToBuy: number
  price: number
  title: string
}

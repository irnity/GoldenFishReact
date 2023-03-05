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

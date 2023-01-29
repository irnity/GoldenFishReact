import Basket from "./Basket"
import CartHeader from "./CartHeader"
import SearchHeader from "./SearchHeader"
import ShopName from "./ShopName"
import Signup from "./Signup"

function Header() {
  return (
    <CartHeader
      leftSide={
        <>
          <ShopName />
          <SearchHeader />
        </>
      }
      rightSide={
        <>
          <Signup />
          <Basket />
        </>
      }
    />
  )
}

export default Header

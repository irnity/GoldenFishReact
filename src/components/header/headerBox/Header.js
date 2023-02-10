import NavigationMain from "../catalog/Catalog"
import Basket from "../basket/Basket"
import CartHeader from "../card/CartHeader"
import SearchHeader from "../search/SearchHeader"
import ShopName from "../title/ShopName"
import Signup from "../signup/Signup"

function Header() {
  return (
    <>
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
      <NavigationMain />
    </>
  )
}

export default Header

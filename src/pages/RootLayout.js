import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import MainCart from "../components/mainPageCart/MainCart"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <>
      <MainCart>
        <Header />
        {/* children elements */}
        <Outlet />
        <Footer />
      </MainCart>
    </>
  )
}

export default RootLayout

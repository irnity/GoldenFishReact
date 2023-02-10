import Footer from "../../components/footer/Footer"
import Header from "../../components/header/headerBox/Header"
import classes from "./RootLayout.module.css"

import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div className={classes.page}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default RootLayout

import React from "react"
import NavigationHeader from "../navigation/NavigationHeader"
import classes from "./CartHeader.module.css"

function CartHeader({ leftSide, rightSide }) {
  return (
    <header className={classes.header}>
      <NavigationHeader />

      <div className={classes.header_bottom}>
        <div className={classes.header_bottom_left}>{leftSide}</div>

        <div className={classes.header_bottom_right}>{rightSide}</div>
      </div>
    </header>
  )
}

export default CartHeader

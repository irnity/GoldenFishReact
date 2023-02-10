import React from "react"
import NavigationHeader from "../navigation/NavigationHeader"
import classes from "./CartHeader.module.css"

function CartHeader({ leftSide, rightSide }) {
  return (
    <header className={classes.card}>
      <NavigationHeader />

      <div className={classes.card_bottom}>
        <div className={classes.card_bottom_left}>{leftSide}</div>

        <div className={classes.card_bottom_right}>{rightSide}</div>
      </div>
    </header>
  )
}

export default CartHeader

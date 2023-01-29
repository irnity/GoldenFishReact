import classes from "./CartMain.module.css"

function CartMain({ children }) {
  return <main className={classes.main}>{children}</main>
}

export default CartMain

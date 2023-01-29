import classes from "./MainCart.module.css"

function MainCart({ children }) {
  return <div className={classes.page}>{children}</div>
}

export default MainCart

import { FunctionComponent } from "react"
import classes from "./Basket.module.css"

interface BasketProps {}

const Basket: FunctionComponent<BasketProps> = () => {
  return (
    <div className={classes.backet}>
      <button>Backet</button>
    </div>
  )
}

export default Basket

import { Link } from "react-router-dom"
import classes from "./AddProductButton.module.css"

function AddProductButton() {
  return (
    <div className={classes.add_block}>
      <Link to={"add-product"}>
        <button className={classes.add_button}>Додати товар</button>
      </Link>
    </div>
  )
}

export default AddProductButton

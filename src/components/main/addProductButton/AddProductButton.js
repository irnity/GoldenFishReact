import { Link } from "react-router-dom"
import classes from "./AddProductButton.module.css"

function AddProductButton() {
  return (
    <div className={classes.main_product_list_add}>
      <Link to={"add-product"}>
        <button className={classes.main_product_list_add_button}>
          Додати товар
        </button>
      </Link>
    </div>
  )
}

export default AddProductButton

import classes from "./AddProduct.module.css"


function AddProduct() {
  return (
    <div className={classes.main_product_list_add}>
    <button className={classes.main_product_list_add_button}>
      Додати товар
    </button>
  </div>
  )
}

export default AddProduct
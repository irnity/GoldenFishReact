import AddProduct from "./AddProduct"
import Product from "./Product"
import classes from "./ProductsList.module.css"

function ProductsList() {
  return (
    <div className={classes.main_products_list}>
      <div className={classes.main_product_list_top}>
        <div className={classes.main_products_list_name}>
          <p className={classes.main_products_list_name_text}>Назва Товару</p>
        </div>

        <AddProduct />
      </div>

      <div className={classes.main_products_list_products}>
        <Product />
      </div>
    </div>
  )
}

export default ProductsList

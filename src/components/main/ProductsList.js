import AddProduct from "./AddProduct"

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
        {/* placeholder */}
        <div className={classes.product}>
          <div className={classes.product_image}>
            <img
              src="https://i.flagman.kiev.ua/goods/1289/1289661.png"
              alt=""
            />
          </div>

          <ul className={classes.product_text}>
            <li className={classes.product_text_p}>Вид</li>
            <li className={classes.product_text_p}>Фірма</li>
            <li className={classes.product_text_p}>Фірма</li>
            <li className={classes.product_text_p}>Фірма</li>
            <li className={classes.product_text_p}>Фірма</li>
            <li className={classes.product_text_p}>Фірма</li>
          </ul>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default ProductsList

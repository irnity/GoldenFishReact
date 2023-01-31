import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import AddProduct from "./AddProduct"

import classes from "./ProductsList.module.css"

function ProductsList() {
  const products = useSelector((state) => state.products.products)

  return (
    <div className={classes.main_products_list}>
      <div className={classes.main_product_list_top}>
        <div className={classes.main_products_list_name}>
          <p className={classes.main_products_list_name_text}>Назва Товару</p>
        </div>

        <AddProduct />
      </div>

      <div className={classes.main_products_list_products}>
        {products.map((product) => {
          return (
            <div className={classes.product} key={product.id}>
              <div className={classes.product_image}>
                <Link to={product.id}>
                  <img
                    src="https://i.flagman.kiev.ua/goods/1289/1289661.png"
                    alt={`${product.id}`}
                  />
                </Link>
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
          )
        })}
      </div>
    </div>
  )
}

export default ProductsList

// react

// redux
import { useSelector } from "react-redux"

// route
import { Link } from "react-router-dom"
import AddProductButton from "../addProductButton/AddProductButton"

import classes from "./ListProducts.module.css"

function ListProducts() {
  const products = useSelector((state) => state.products.products)

  return (
    <div className={classes.products_list}>
      <div className={classes.product_list_top}>
        <div className={classes.products_list_name}>
          <p className={classes.products_list_name_text}>Назва Товару</p>
        </div>

        <AddProductButton />
      </div>

      {console.log()}
      <div className={classes.products_list_products}>
        {products.map((product) => {
          return (
            <div className={classes.product} key={product.id}>
              <div className={classes.product_image}>
                <Link to={product.id}>
                  <img
                    src={product.image}
                    alt={`${product.id}`}
                    className={classes.image}
                  />
                </Link>
              </div>

              <ul className={classes.product_text}>
                <li className={classes.product_text_p}>{product.title}</li>
                <li className={classes.product_text_p}>{product.price}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProducts

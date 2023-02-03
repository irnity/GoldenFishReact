// css
import classes from "./Product.module.css"
// router
import { useSubmit } from "react-router-dom"

import { useDispatch } from "react-redux/es/exports"
import { productsActions } from "../../store/productsSlice"

import AboutBottomProduct from "./AboutBottomProduct"

function Product({ product }) {
  const submit = useSubmit()
  const dispatch = useDispatch()

  function startDeleteHandler() {
    const procced = window.confirm("Are you sure?")

    if (procced) {
      submit(null, { method: "delete" })
      dispatch(productsActions.removeProduct())
    }
  }

  return (
    <div className={classes.product_box}>
      <div className={classes.product_top}>
        <div className={classes.product_image}>
          <img src={product.image} alt="" className={classes.image} />
        </div>

        <div className={classes.product_text}>
          <div className={classes.product_text_top}>
            <div>
              {/* product name */}
              <p>{product.title}</p>
            </div>
            <div className={classes.product_text_top_code}>
              {/* id */}
              <p>Код товару: {product.code || "code"}</p>
            </div>
          </div>
          <div className={classes.product_text_mid}>
            <div className={classes.product_text_mid_top}>
              {/* check if in stock */}
              {product.inStock >= 1 ? (
                <span>В наявності</span>
              ) : (
                <span>Немає в наявності</span>
              )}
            </div>
            <div className={classes.product_text_mid_top}>
              <span>Ціна: {product.price}₴</span>
            </div>
            <div className={classes.product_text_mid_top}>
              <button>Купити</button>
              <button onClick={startDeleteHandler}>Видалити</button>
            </div>
          </div>
          <div className={classes.product_text_bottom}>
            <div>Опис: {product.description}</div>
          </div>
        </div>
      </div>
      <AboutBottomProduct product={product} />
    </div>
  )
}

export default Product

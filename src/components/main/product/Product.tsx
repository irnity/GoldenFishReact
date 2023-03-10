// css
import classes from "./Product.module.css"

// router
import { useSubmit } from "react-router-dom"

// Redux
import { useDispatch } from "react-redux/es/exports"
import { productsActions } from "../../../store/productsSlice"
import { basketActions } from "../../../store/basketSlice"

// Components
import AboutProduct from "../about/AboutProduct"

// TS
import { FunctionComponent } from "react"

interface ProductProps {
  product: {
    description: string
    title: string
    image: string
    price: number
    code: string
    inStock: string
  }
}

const Product: FunctionComponent<ProductProps> = ({ product }) => {
  const submit = useSubmit()
  const dispatch = useDispatch()

  function startDeleteHandler() {
    const procced = window.confirm("Are you sure?")

    // submit delete
    // dispath update
    if (procced) {
      submit(null, { method: "delete" })
      dispatch(productsActions.removeProduct())
    }
  }

  const addProductToBasket = () => {
    dispatch(basketActions.addToBasket(product))
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
              {product.inStock >= "1" ? (
                <span>В наявності</span>
              ) : (
                <span>Немає в наявності</span>
              )}
            </div>
            <div className={classes.product_text_mid_top}>
              <span>Ціна: {product.price}₴</span>
            </div>
            <div className={classes.product_text_mid_top}>
              <button onClick={addProductToBasket}>Додати В кошик</button>
              <button onClick={startDeleteHandler}>Видалити</button>
            </div>
          </div>
          <div className={classes.product_text_bottom}>
            <div>Опис: {product.description}</div>
          </div>
        </div>
      </div>
      <AboutProduct />
    </div>
  )
}

export default Product

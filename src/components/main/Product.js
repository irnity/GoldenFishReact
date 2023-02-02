// css
import classes from "./Product.module.css"
// router
import { useParams } from "react-router-dom"
// redux
import { useDispatch } from "react-redux"
import { productsActions } from "../../store/productsSlice"
import AboutBottomProduct from "./AboutBottomProduct"

function Product({ product }) {
  const params = useParams()
  // path product id we get from ProductsList id
  const id = params.productId

  const dispatch = useDispatch()

  // doesnt work now
  const removeHandler = () => {
    dispatch(productsActions.removeProduct(id))
  }

  return (
    <div className={classes.product_box}>
      <div className={classes.product_top}>
        <div className={classes.product_image}>
          <img src={product.image} alt="" />
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
              <span>{product.price}грн.</span>
            </div>
            <div className={classes.product_text_mid_top}>
              <button onClick={removeHandler}>Купити</button>
            </div>
          </div>
          <div className={classes.product_text_bottom}>
            <div>
              {/* <ul>
                <li>Довжина: 3.6 м</li>
                <li>Кількість секцій: 3 + 3</li>
                <li>Матеріал бланка: Графит (карбон)</li>
                <li>Дія: Швидка (Fast)</li>
                <li>Вага: 250 г</li>
              </ul> */}
              {product.description}
            </div>
          </div>
        </div>
      </div>
      <AboutBottomProduct product={product} />
    </div>
  )
}

export default Product

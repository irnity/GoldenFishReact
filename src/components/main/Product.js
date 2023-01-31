// css
import classes from "./Product.module.css"
// router
import { useParams } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { productsActions } from "../../store/productsSlice"

function Product() {
  const params = useParams()
  // path product id we get from ProductsList id
  const id = params.productId

  // redux
  // get all products
  const products = useSelector((state) => state.products.products)
  // get spesific project by id
  const product = products.find((product) => product.id === id)
  // console.log(product)

  const dispatch = useDispatch()

  const removeHandler = () => {
    dispatch(productsActions.removeProduct(id))
  }

  return (
    <div className={classes.product_box}>
      <div className={classes.product_top}>
        <div className={classes.product_image}>
          <img src="https://i.flagman.kiev.ua/goods/1289/1289661.png" alt="" />
        </div>

        <div className={classes.product_text}>
          <div className={classes.product_text_top}>
            <div>
              {/* product name */}
              <p>{product.title}</p>
            </div>
            <div className={classes.product_text_top_code}>
              {/* id */}
              <p>Код товару: {product.id}</p>
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
      <div className={classes.product_bottom}>
        <div className={classes.product_bottom_block}>
          <div className={classes.product_bottom_block_text}>
            <span>Усе</span>
          </div>
          <div className={classes.product_bottom_block_text}>
            <span>Характеристики</span>
          </div>
          <div className={classes.product_bottom_block_text}>
            <span>Опис</span>
          </div>
          <div className={classes.product_bottom_block_text}>
            <span>Аксесуари</span>
          </div>
          <div className={classes.product_bottom_block_text}>
            <span>Фото та відео</span>
          </div>
          <div className={classes.product_bottom_block_text}>
            <span>Рекомендовані товари</span>
          </div>
          <div className={classes.product_bottom_block_text}>
            <span>Відгуки</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

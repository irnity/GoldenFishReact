import { useParams } from "react-router-dom"
import classes from "./Product.module.css"
import { useSelector } from "react-redux"

function Product() {
  const params = useParams()
  const id = params.productId

  const products = useSelector((state) => state.products)

  const product = products.filter((product) => product.id === params.productId)
  console.log(product)
  return (
    <div className={classes.product_box}>
      <div className={classes.product_top}>
        <div className={classes.product_image}>
          <img src="https://i.flagman.kiev.ua/goods/1289/1289661.png" alt="" />
        </div>

        <div className={classes.product_text}>
          {/*  */}
          <div className={classes.product_text_top}>
            <div>
              <p>Фідерне вудлище Flagman Mantaray Pro Feeder 3.6м 100г</p>
            </div>
            <div className={classes.product_text_top_code}>
              <p>{id}</p>
            </div>
          </div>
          {/*  */}
          <div className={classes.product_text_mid}>
            <div className={classes.product_text_mid_top}>
              <span>В наявності</span>
            </div>
            <div className={classes.product_text_mid_top}>
              <span>4266 грн.</span>
            </div>
            <div className={classes.product_text_mid_top}>
              <button>Купити</button>
            </div>
          </div>
          <div className={classes.product_text_bottom}>
            <div>
              <ul>
                <li>Довжина: 3.6 м</li>
                <li>Кількість секцій: 3 + 3</li>
                <li>Матеріал бланка: Графит (карбон)</li>
                <li>Дія: Швидка (Fast)</li>
                <li>Вага: 250 г</li>
              </ul>
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

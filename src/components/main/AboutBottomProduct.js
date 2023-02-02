import { Link } from "react-router-dom"
import classes from "./AboutBottomProduct.module.css"

function AboutBottomProduct() {
  return (
    <div className={classes.product_bottom}>
      <div className={classes.product_bottom_block}>
        <div className={classes.product_bottom_block_text}>
          <Link to="all">Усе</Link>
        </div>
        <div className={classes.product_bottom_block_text}>
          <Link to="/">Характеристики</Link>
        </div>
        <div className={classes.product_bottom_block_text}>
          <Link to="/">Опис</Link>
        </div>
        <div className={classes.product_bottom_block_text}>
          <Link to="/">Аксесуари</Link>
        </div>
        <div className={classes.product_bottom_block_text}>
          <Link to="/">Фото та відео</Link>
        </div>
        <div className={classes.product_bottom_block_text}>
          <Link to="/">Рекомендовані товари</Link>
        </div>
        <div className={classes.product_bottom_block_text}>
          <Link to="/">Відгуки</Link>
        </div>
      </div>
    </div>
  )
}

export default AboutBottomProduct

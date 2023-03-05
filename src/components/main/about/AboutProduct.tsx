import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import classes from "./AboutProduct.module.css"

interface AboutProductProps {}

const AboutProduct: FunctionComponent<AboutProductProps> = () => {
  return (
    <div className={classes.bottom}>
      <div className={classes.bottom_block}>
        <div className={classes.bottom_block_text}>
          <Link className={classes.link} to="info">
            Усе
          </Link>
        </div>
        <div className={classes.bottom_block_text}>
          <Link className={classes.link} to="characteristics">
            Характеристики
          </Link>
        </div>
        <div className={classes.bottom_block_text}>
          <Link className={classes.link} to="description">
            Опис
          </Link>
        </div>
        <div className={classes.bottom_block_text}>
          <Link className={classes.link} to="additinal">
            Аксесуари
          </Link>
        </div>
        <div className={classes.bottom_block_text}>
          <Link className={classes.link} to="media">
            Фото та відео
          </Link>
        </div>
        <div className={classes.bottom_block_text}>
          <Link className={classes.link} to="recomendation">
            Рекомендовані товари
          </Link>
        </div>
        <div className={classes.bottom_block_text}>
          <Link className={classes.link} to="reviews">
            Відгуки
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutProduct

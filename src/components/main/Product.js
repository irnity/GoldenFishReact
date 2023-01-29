import classes from "./Product.module.css"

function Product() {
  return (
    <div className={classes.product}>
      <div className={classes.product_image}>
        <img src="https://i.flagman.kiev.ua/goods/1289/1289661.png" alt="" />
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
}

export default Product

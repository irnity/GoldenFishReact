import classes from "./NavigationHeader.module.css"

function NavigationHeader() {
  return (
    <div className={classes.header_top}>
      <div className={classes.header_top_info}>
        <ul className={classes.header_top_info_list}>
          <li>
            <a href="/" className={classes.header_top_info_href}>
              HomePage
            </a>
          </li>
          <li>
            <a href="products" className={classes.header_top_info_href}>
              Products
            </a>
          </li>
          <li>
            <a href="products/:1" className={classes.header_top_info_href}>
              Product
            </a>
          </li>
          <li>
            <a href="/" className={classes.header_top_info_href}>
              Бренди
            </a>
          </li>
          <li>
            <a href="/" className={classes.header_top_info_href}>
              Контаки
            </a>
          </li>
          <li>
            <a href="/" className={classes.header_top_info_href}>
              Магазини
            </a>
          </li>
          <li>
            <a href="/" className={classes.header_top_info_href}>
              Партнери
            </a>
          </li>
          <li>
            <a href="/" className={classes.header_top_info_href}>
              Допомога
            </a>
          </li>
        </ul>
      </div>

      <div className={classes.header_top_info}>
        <ul className={classes.header_top_info_list}>
          <li className={classes.header_top_info_href}>098800553535</li>
          <li className={classes.header_top_info_href}>
            Замовивити звороній зв'язок
          </li>
          <li className={classes.header_top_info_href}>Ua</li>
          <li className={classes.header_top_info_href}>Eng</li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationHeader

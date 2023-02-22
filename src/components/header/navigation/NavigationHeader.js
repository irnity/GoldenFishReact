import { Link } from "react-router-dom"
import classes from "./NavigationHeader.module.css"

function NavigationHeader() {
  return (
    <div className={classes.top}>
      <div className={classes.top_info}>
        <ul className={classes.top_info_list}>
          <li>
            <Link to="/" className={classes.top_info_href}>
              HomePage
            </Link>
          </li>
          <li>
            <Link to="products" className={classes.top_info_href}>
              Удочки
            </Link>
          </li>
          <li>
            <Link to="hooks" className={classes.top_info_href}>
              Гачки
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.top_info_href}>
              Бренди
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.top_info_href}>
              Контаки
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.top_info_href}>
              Магазини
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.top_info_href}>
              Партнери
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.top_info_href}>
              Допомога
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.top_info}>
        <ul className={classes.top_info_list}>
          <li className={classes.top_info_href}>098800553535</li>
          <li className={classes.top_info_href}>
            Замовивити звороній зв'язок
          </li>
          <li className={classes.top_info_href}>Ua</li>
          <li className={classes.top_info_href}>Eng</li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationHeader
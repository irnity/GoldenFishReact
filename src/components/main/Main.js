import classes from "./Main.module.css"

function Main() {
  return (
    <main className={classes.main}>
      <div className={classes.main_catalog}>
        <div className={classes.main_catalog_section}>
          <div>Каталог</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Спінінг</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Фідер</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Короп</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Поплавок</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Зима</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Море</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Туризм</div>
        </div>

        <div className={classes.main_catalog_section}>
          <div>Екіпірування</div>
        </div>
      </div>

      <div className={classes.main_products_list}>
        <div className={classes.main_product_list_top}>
          <div className={classes.main_products_list_name}>
            <p className={classes.main_products_list_name_text}>Назва Товару</p>
          </div>
          <div className={classes.main_product_list_add}>
            <button className={classes.main_product_list_add_button}>
              Додати товар
            </button>
          </div>
        </div>

        <div className={classes.main_products_list_products}>
          <div className={classes.product}>
            <div className={classes.product_image}>
              <img
                src="https://i.flagman.kiev.ua/goods/1289/1289661.png"
                alt=""
              />
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

          <div className={classes.product}>
            <div className={classes.product_image}>
              <img
                src="https://i.flagman.kiev.ua/goods/1289/1289661.png"
                alt=""
              />
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

          <div className={classes.product}>
            <div className={classes.product_image}>
              <img
                src="https://i.flagman.kiev.ua/goods/1289/1289661.png"
                alt=""
              />
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
        </div>
      </div>
    </main>
  )
}

export default Main

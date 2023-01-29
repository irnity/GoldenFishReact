import classes from "./NavigationMain.module.css"

function NavigationMain() {
  return (
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
  )
}

export default NavigationMain

import classes from "./NavigationMain.module.css"

function NavigationMain() {
  return (
    <div className={classes.main_catalog}>
      <div className={classes.main_catalog_section}>
        <span>Каталог</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Спінінг</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Фідер</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Короп</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Поплавок</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Зима</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Море</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Туризм</span>
      </div>

      <div className={classes.main_catalog_section}>
        <span>Екіпірування</span>
      </div>
    </div>
  )
}

export default NavigationMain

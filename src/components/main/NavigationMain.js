import { useState } from "react"
import { Link } from "react-router-dom"
import classes from "./NavigationMain.module.css"

function NavigationMain() {
  const [toggleNavigation, setToggleNavigation] = useState(false)
  const [flade, setFlade] = useState(classes.catalog_in)

  const toggleNavigationHandler = () => {
    if (toggleNavigation === false) {
      setToggleNavigation((prevState) => !prevState)
      setFlade(classes.catalog_in)
    } else {
      setFlade(classes.catalog_out)
      setTimeout(() => {
        setToggleNavigation((prevState) => !prevState)
      }, 0.3 * 1000)
    }
  }

  return (
    <>
      <div className={classes.main_catalog}>
        <div
          className={classes.main_catalog_section}
          onClick={toggleNavigationHandler}
        >
          <button className={classes.toggle}>Каталог</button>
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
      {toggleNavigation && (
        <div className={flade}>
          <div className={classes.catalog_link}>
            <div className={classes.catalog_link_text}>
              <Link
                onClick={toggleNavigationHandler}
                to="/products"
                style={{ "text-decoration": "none" }}
              >
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/hooks">
                Гачки
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
          </div>
          <div className={classes.catalog_link}>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                <span>Вудилища</span>
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
          </div>
          <div className={classes.catalog_link}>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
          </div>
          <div className={classes.catalog_link}>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
            <div className={classes.catalog_link_text}>
              <Link onClick={toggleNavigationHandler} to="/">
                Вудилища
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavigationMain

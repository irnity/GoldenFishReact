import { useState } from "react"
import { Link } from "react-router-dom"
import Cat from "./Cat"
import classes from "./Catalog.module.css"
import { catalogList as information } from "./Info"

function NavigationMain() {
  const [toggleNavigation, setToggleNavigation] = useState(false)
  const [flade, setFlade] = useState(classes.catalog_in)
  const [list, setList] = useState([])

  const toggleNavigationHandler = (data) => {
    if (list !== data) {
      setToggleNavigation((prevState) => (prevState = true))
      setFlade(classes.catalog_in)
      setList((prevState) => (prevState = data))
      return
    } else {
      setFlade(classes.catalog_out)
      setTimeout(() => {
        setToggleNavigation((prevState) => (prevState = false))
        setList((prevState) => (prevState = []))
      }, 0.3 * 1000)
    }
  }

  return (
    <>
      <div className={classes.catalog}>
        {information.map((data) => (
          <Cat
            toggleNavigationHandler={toggleNavigationHandler}
            title={data.name}
            catalog={data.catalog}
          />
        ))}
      </div>
      {toggleNavigation && (
        <div className={flade}>
          <div className={classes.catalog_link}>
            {list.map((catalog) => (
              <div className={classes.catalog_link_text}>
                <Link to={`/${catalog}`} className={classes.link}>
                  {catalog}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default NavigationMain

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
    // check if list has data or its new data
    // then update list
    if (JSON.stringify(list) !== JSON.stringify(data)) {
      setToggleNavigation((prevState) => (prevState = true))
      setFlade(classes.catalog_in)
      setList((prevState) => (prevState = data))
      return
      // if new data = old data then catalog will be closed
    } else {
      fadeOut()
    }
  }

  function fadeOut() {
    setFlade(classes.catalog_out)
    setTimeout(() => {
      setToggleNavigation((prevState) => (prevState = false))
      setList((prevState) => (prevState = []))
    }, 0.3 * 1000)
  }

  return (
    <>
      <div className={classes.catalog}>
        {/* catalog section */}
        {information.map((data) => (
          <Cat
            toggleNavigationHandler={toggleNavigationHandler}
            title={data.name}
            catalog={data.catalog}
          />
        ))}
      </div>
      {/* list one of section  */}
      {toggleNavigation && (
        <div className={flade}>
          <div className={classes.catalog_link}>
            {list.map((catalog) => (
              <div className={classes.catalog_link_text}>
                <Link
                  to={`/${catalog}`}
                  className={classes.link}
                  onClick={fadeOut}
                >
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

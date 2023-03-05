import { useState, FunctionComponent } from "react"
import { Link } from "react-router-dom"
import CatalogList from "./CatalogList"
import classes from "./Catalog.module.css"
import { catalogList as information } from "./Info"

interface CatalogProps {}

const Catalog: FunctionComponent<CatalogProps> = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false)
  const [flade, setFlade] = useState(classes.catalog_in)
  const [list, setList] = useState<string[]>([])

  const toggleNavigationHandler = (data: string[]) => {
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
          <CatalogList
            key={data.name}
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
            {/* need keys for catalog */}
            {list.map((catalog, index) => (
              <div className={classes.catalog_link_text} key={index}>
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

export default Catalog

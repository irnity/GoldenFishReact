import { useState, FunctionComponent } from "react"
import { Link } from "react-router-dom"
import CatalogList from "./CatalogList"
import classes from "./Catalog.module.css"
import { Transition } from "react-transition-group"

import { catalogList as information } from "./Info"

interface CatalogProps {}

const animationTiming = {
  enter: 400,
  exit: 1000,
}

const Catalog: FunctionComponent<CatalogProps> = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false)
  const [list, setList] = useState<string[]>([])

  const toggleNavigationHandler = (data: string[]) => {
    // check if list has data or its new data
    // if new then update list
    if (JSON.stringify(list) !== JSON.stringify(data)) {
      setToggleNavigation((prevState) => (prevState = true))
      setList(data)
      return
      // if new data === old data then catalog will be closed
    } else {
      fadeOut()
    }
  }

  function fadeOut() {
    setToggleNavigation((prevState) => (prevState = false))
    setList((prevState) => (prevState = []))
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
      <Transition
        in={toggleNavigation}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
      >
        {(state) => {
          const cssClasses = [
            classes.catalog_block,
            state === "entering"
              ? classes.catalog_in
              : state === "exiting"
              ? classes.catalog_out
              : null,
          ]
          return (
            <div className={cssClasses.join(" ")}>
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
          )
        }}
      </Transition>
    </>
  )
}

export default Catalog
// style={{
//   position: "absolute",
//   top: "30%",
//   display: "flex",
//   justifyContent: "space-around",
//   width: "90%",
//   height: "65%",
//   boxShadow: "0px 0px 10px 0px black",
//   backgroundColor: " white",

// }

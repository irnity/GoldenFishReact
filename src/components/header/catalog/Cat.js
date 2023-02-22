import classes from "./Catalog.module.css"

function Cat({ toggleNavigationHandler, title, catalog }) {
  const dataHandler = () => {
    toggleNavigationHandler(catalog)
  }

  return (
    <div className={classes.catalog_section} onClick={dataHandler}>
      <span className={classes.toggle}>{title}</span>
    </div>
  )
}

export default Cat

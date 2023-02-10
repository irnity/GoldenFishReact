import classes from "./Catalog.module.css"

function Cat({ toggleNavigationHandler, title, catalog }) {
  const dataHanlder = () => {
    toggleNavigationHandler(catalog)
  }

  return (
    <div className={classes.catalog_section} onClick={dataHanlder}>
      <span className={classes.toggle}>{title}</span>
    </div>
  )
}

export default Cat

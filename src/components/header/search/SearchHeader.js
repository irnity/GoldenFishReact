import classes from "./SearchHeader.module.css"

function SearchHeader() {
  return (
    <div className={classes.search}>
      <input type="text" defaultValue="Search..." />
    </div>
  )
}

export default SearchHeader

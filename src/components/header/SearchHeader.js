import classes from "./SearchHeader.module.css"

function SearchHeader() {
  return (
    <div className={classes.header_bottom_info}>
      <input type="text" defaultValue="Search..." />
    </div>
  )
}

export default SearchHeader

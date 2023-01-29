import classes from "./SearchHeader.module.css"


function SearchHeader() {
  return (
    <div className={classes.header_bottom_info}>
      <input type="text" value="Search..." />
    </div>
  )
}

export default SearchHeader

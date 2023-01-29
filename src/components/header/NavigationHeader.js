import classes from "./NavigationHeader.module.css"

function NavigationHeader() {
  return (
    <div className={classes.header_top}>

      

      <div className={classes.header_top_info}>
        <ul className={classes.header_top_info_list}>
          <li className={classes.header_top_info_href}>098800553535</li>
          <li className={classes.header_top_info_href}>
            Замовивити звороній зв'язок
          </li>
          <li className={classes.header_top_info_href}>Ua</li>
          <li className={classes.header_top_info_href}>Eng</li>
        </ul>
      </div>

    </div>
  )
}

export default NavigationHeader

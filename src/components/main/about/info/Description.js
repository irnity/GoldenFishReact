import classes from "./Description.module.css"

function Description({ description }) {
  return (
    <div className={classes.description}>
      <div className={classes.name}>
        <h2>Опис</h2>
      </div>
      <div className={classes.info}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Description

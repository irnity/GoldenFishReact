import classes from "./Card.module.css"

function Card({ children }) {
  return <main className={classes.main}>{children}</main>
}

export default Card

import classes from "./Card.module.css"

function Card({ children }) {
  return <main className={classes.card}>{children}</main>
}

export default Card

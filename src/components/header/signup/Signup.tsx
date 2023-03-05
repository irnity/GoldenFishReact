import { FunctionComponent } from "react"
import classes from "./Signup.module.css"

interface SighupProps {}

const Sighup: FunctionComponent<SighupProps> = () => {
  return (
    <div className={classes.signup}>
      <button>SignUp</button>
    </div>
  )
}

export default Sighup

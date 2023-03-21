import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import classes from "./Signup.module.css"

import { useSelector } from "react-redux"

interface SighupProps {}

const Sighup: FunctionComponent<SighupProps> = () => {
  const auth = useSelector(
    (state: { auth: { isLogedIn: boolean } }) => state.auth.isLogedIn
  )

  return (
    <div className={classes.signup}>
      {!auth && (
        <Link to="/auth">
          <button>SignUp</button>
        </Link>
      )}
    </div>
  )
}

export default Sighup

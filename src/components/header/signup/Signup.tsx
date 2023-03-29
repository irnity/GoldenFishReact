import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import classes from "./Signup.module.css"

import { useDispatch } from "react-redux"
import { authActions } from "../../../store/authSlice"

import { useSelector } from "react-redux"

interface SighupProps {}

const Sighup: FunctionComponent<SighupProps> = () => {
  const dispatch = useDispatch()

  const { isLogedIn } = useSelector(
    (state: { auth: { isLogedIn: boolean } }) => state.auth
  )

  return (
    <div className={classes.signup}>
      {isLogedIn === false ? (
        <Link to="/auth">
          <button>SignUp</button>
        </Link>
      ) : (
        <>
          <button
            onClick={() => {
              dispatch(authActions.logOut())
            }}
          >
            Logout
          </button>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Sighup

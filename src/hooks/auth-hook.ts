import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth } from "../config/firebase"
import { authActions } from "../store/authSlice"

const useAuth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const emailSetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const passwordSetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const signInHandler = async () => {
    try {
      // need add createUserWithEmailAndPassword separet
      await signInWithEmailAndPassword(auth, email, password)
      dispatch(authActions.logInWithPassword())
    } catch (err) {
      console.error(err)
    }
  }

  return { email, password, emailSetHandler, passwordSetHandler, signInHandler }
}

export default useAuth

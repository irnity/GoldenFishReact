import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth, db } from "../config/firebase"
import { signGoogle } from "../store/authActions"
import { authActions } from "../store/authSlice"

// user.uid - User UID
// user.email - User email

const useAuth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  // email value
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  // password value
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  // login with google
  const loginWithGoogleHandler = () => {
    dispatch(signGoogle())
  }

  // login with email & password
  const loginHandler = async () => {
    try {
      // need add createUserWithEmailAndPassword separet
      const responce = await signInWithEmailAndPassword(auth, email, password)
      // need add logic for login
      console.log(responce)
      dispatch(authActions.logInWithPassword())
    } catch (err) {
      console.error(err)
    }
  }

  // create user with email & password
  const registrationHandler = async () => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    // setDoc create new document if its not existed with custom id
    setDoc(doc(db, "users", cred.user.uid), {
      // user information
      email: email,
      userId: cred.user.uid,
    })
  }

  // logout
  const logout = () => {
    dispatch(authActions.logOut())
  }

  return {
    email,
    password,
    emailHandler,
    passwordHandler,
    registrationHandler,
    loginHandler,
    loginWithGoogleHandler,
    logout,
  }
}

export default useAuth

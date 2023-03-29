import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth, db } from "../config/firebase"
import { authActions } from "../store/authSlice"

// user.uid - User UID
// user.email - User email

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
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    // setDoc createNew elemets if its not existed with our id
    setDoc(doc(db, "users", cred.user.uid), {
      email: email,
      userId: cred.user.uid,
    })
  }

  const logInHandler = async () => {
    try {
      // need add createUserWithEmailAndPassword separet
      await signInWithEmailAndPassword(auth, email, password).then((cred) =>
        console.log(cred)
      )
      dispatch(authActions.logInWithPassword())
    } catch (err) {
      console.error(err)
    }
  }

  return {
    email,
    password,
    emailSetHandler,
    passwordSetHandler,
    signInHandler,
    logInHandler,
  }
}

export default useAuth

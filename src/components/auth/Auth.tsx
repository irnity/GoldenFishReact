import { FunctionComponent, useState, useEffect } from "react"

import { auth, googleProvider } from "../../config/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"

import useAuth from "../../hooks/auth-hook"

import classes from "./Auth.module.css"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {
  const dispatch = useDispatch()

  const {
    email,
    password,
    emailSetHandler,
    passwordSetHandler,
    signInHandler,
  } = useAuth()

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailSetHandler(event)
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordSetHandler(event)
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      dispatch(authActions.logInWithPassword())
    } catch (err) {
      console.error(err)
    }
  }

  const logout = () => {
    dispatch(authActions.logOut())
  }

  return (
    <div className={classes.box}>
      <input
        placeholder="Email..."
        value={email}
        onChange={emailHandler}
        type="email"
      />
      <input
        placeholder="Password..."
        onChange={passwordHandler}
        type="password"
        value={password}
      />

      <div>
        <button>Log In</button>
        <button onClick={signInHandler}>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>

      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Auth

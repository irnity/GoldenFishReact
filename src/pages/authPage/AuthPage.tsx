import { FunctionComponent, useState, useEffect } from "react"

import { auth, googleProvider } from "../../config/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"

import useAuth from "../../hooks/auth-hook"

import classes from "./AuthPage.module.css"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

import { signGoogle } from "../../store/authActions"

interface AuthProps {}

const AuthPage: FunctionComponent<AuthProps> = () => {
  const dispatch = useDispatch()

  const {
    email,
    password,
    emailSetHandler,
    passwordSetHandler,
    logInHandler,
    signInHandler,
  } = useAuth()

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailSetHandler(event)
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordSetHandler(event)
  }

  const logInWithGoogle = () => {
    dispatch(signGoogle())
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
        <button onClick={logInHandler}>Log In</button>
        <button onClick={signInHandler}>Sign In</button>
        <button onClick={logInWithGoogle}>Sign In With Google</button>
      </div>

      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default AuthPage

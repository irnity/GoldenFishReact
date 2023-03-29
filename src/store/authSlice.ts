import { createSlice } from "@reduxjs/toolkit"

import { auth, googleProvider } from "../config/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"

const initialAuthState: {
  isLogedIn: boolean
  userInfo: {
    email: string | null | undefined
  }
} = {
  isLogedIn: false,
  userInfo: {
    email: "",
  },
}

const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    isLogedInCheck(state) {
      const logedInStorage = localStorage.getItem("logedIn")

      const timeStorage = localStorage.getItem("time")

      if (timeStorage) {
        const now: any = new Date()
        const saved: any = new Date(timeStorage)

        const diffTime = Math.abs(now - saved)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays >= 7 && logedInStorage === "true") {
          state.isLogedIn = false

          localStorage.removeItem("myDate")
          localStorage.removeItem("logedIn")

          logout()
        } else {
          state.isLogedIn = true
        }
      }
    },

    userInfoChange(state, payload) {
      // console.log(payload.payload)
      state.userInfo.email = payload.payload
    },

    logInWithPassword(state) {
      state.isLogedIn = true

      localStorage.setItem("logedIn", "true")
      localStorage.setItem("time", new Date().toISOString())
    },

    logOut(state) {
      state.isLogedIn = false

      localStorage.removeItem("logedIn")
      localStorage.removeItem("time")
      logout()
    },
  },
})

const logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}

export const authActions = authSlice.actions

export default authSlice.reducer

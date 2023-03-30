import { signInWithPopup, signOut } from "firebase/auth"
import { Dispatch, AnyAction } from "redux"
import { auth, googleProvider } from "../config/firebase"
import { authActions } from "./authSlice"

export const info = (): any => {
  // dispatch on authSlice userInfoChange()
  return (dispatch: Dispatch<AnyAction>) => {
    // find info about logedin user
    let email: string | null = "email"
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        email = user.email
      } else {
        email = "not loged IN"
      }
      dispatch(authActions.userInfoChange(email))
    })
  }
}

export const signGoogle = (): any => {
  // dispatch on authSlice loginwithPassword()
  return (dispatch: Dispatch<AnyAction>) => {
    // try login with google
    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider).then((cred) =>
          console.log(cred)
        )
        dispatch(authActions.logInWithPassword())
      } catch (err) {
        console.error(err)
      }
    }
    signInWithGoogle()
  }
}

// export const logOut = (): any => {
//   return async (dispatch: Dispatch<AnyAction>) => {
//     const logout = async () => {
//       try {
//         await signOut(auth)
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     await logout()
//     dispatch(authActions.logOut())
//   }
// }
import { createContext, useState } from "react";
import {firebase} from "../firebaseConfig.js"

export const AuthContext = createContext(),
// Authentication context
AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(null);
  const [authError, setError] = useState({ error: false , msg: null})
  // firebase stream method to wait for data/auth change
  firebase.auth().onAuthStateChanged((user) => {
    user ? setAuth(user.uid) : setAuth(null)
  })
  // Sign up is unnecessary for now
  // Sign in method
  const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((credential) => {
        console.log(credential)
        setAuth(credential.user.uid)
        setError({ error: false , msg: null})
      })
      .catch(err => {
        setError({error: true, msg: err.message});
        console.log(err);
      })
  }
  // Sign out method
  const signOut = () => {
    firebase.auth().signOut().then(setAuth(null))
      .catch(err => console.log(err))
  }
  return (
    <AuthContext.Provider value={{auth, signIn, signOut, authError}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
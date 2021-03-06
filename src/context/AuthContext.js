import { createContext, useState } from "react";
import firebase from "../firebaseConfig.js"

export const AuthContext = createContext(),

AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(null);
  const [authError, setError] = useState({ error: false , msg: null})

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      setAuth(user.uid)
    } else {
      setAuth(null)
    }
  })
  // Sign up is unnecessary for now
  // Sign in
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
  // Sign out
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
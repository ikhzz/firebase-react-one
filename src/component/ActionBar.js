import { useContext, useState} from "react"
import { AuthContext } from "../context/AuthContext.js";
import { SourceContext } from "../context/SourceContext.js";
import firebase from "../firebaseConfig.js";

const ActionBar = () => {
  const {newSource} = useContext(SourceContext)
  const { auth, signIn, signOut } = useContext(AuthContext)
  
  const [login, setLogin] = useState({
    email : "",
    pass : ""
  })
  const [source, setSource] = useState({
    name : "",
    from : "",
    language: ""
  })
  
  const checkAuth = () => {
    let info = firebase.auth().currentUser  
    console.log(info)
    console.log(auth)
  }
  return (
    <ul className="login" >
      <li>
        <span>Tambah Sumber</span>
        <span>Tambah Bookmark</span>
      </li>
      <li className="loginForm">
        <label>Login</label>
        <input type="text" value={login.email} onChange={(e)=> setLogin(prev => ({...prev, email : e.target.value}))}></input>
        <input type="text" value={login.pass} onChange={(e)=> setLogin(prev => ({...prev, pass : e.target.value}))}></input>
        <button onClick={()=> signIn(login.email, login.pass)}>login</button>
      </li>
      <li>
        <input type="text" value={source.name} onChange={(e)=> setSource(prev => ({...prev, name : e.target.value}))}></input>
        <input type="text" value={source.from} onChange={(e)=> setSource(prev => ({...prev, from : e.target.value}))}></input>
        <input type="text" value={source.language} onChange={(e)=> setSource(prev => ({...prev, language : e.target.value}))}></input>
        <button onClick={()=> newSource(source.name, source.from, source.language)}>tambah sumber</button>
        <button onClick={checkAuth}>tambah playlist</button>
      </li>
      <li>
        <button onClick={signOut}>logout</button>
      </li>
    </ul>
  )
}

export default ActionBar;
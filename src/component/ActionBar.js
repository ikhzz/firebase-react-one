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
  const [input, setInput] = useState("source")
  const checkAuth = () => {
    let info = firebase.auth().currentUser  
    console.log(info)
    console.log(auth)
  }
  const [display, setDisplay] = useState("none")
  return (
    <>
    <div className="showLogin">
      <button onClick={()=> setDisplay("grid")}>login</button>
    </div>
    
    <ul className="login" style={{display: display}}>
      <li>
        <span onClick={()=> setDisplay("none")}>X</span>
      </li>
      {auth &&
        <li className="inputTab">
        <span onClick={()=> setInput("source")}>Sumber</span>
        <span onClick={()=> setInput("bookmark")}>Bookmark</span>
      </li>
      }
      {!auth && 
        <li className="loginForm">
          <h3>Login</h3>
          <input type="text" value={login.email} onChange={(e)=> setLogin(prev => ({...prev, email : e.target.value}))}></input>
          <input type="text" value={login.pass} onChange={(e)=> setLogin(prev => ({...prev, pass : e.target.value}))}></input>
          <button onClick={()=> signIn(login.email, login.pass)}>login</button>
      </li>
      }
      {auth && input == "source" &&
        <li>
          <h3>Tambah Sumber</h3>
          <input type="text" value={source.name} onChange={(e)=> setSource(prev => ({...prev, name : e.target.value}))}></input>
          <input type="text" value={source.from} onChange={(e)=> setSource(prev => ({...prev, from : e.target.value}))}></input>
          <input type="text" value={source.language} onChange={(e)=> setSource(prev => ({...prev, language : e.target.value}))}></input>
          <button onClick={()=> newSource(source.name, source.from, source.language)}>tambah sumber</button>
          <button onClick={checkAuth}>tambah playlist</button>
        </li>  
      }
      {auth && input == "bookmark" &&
        <li>
          <h3>Tambah Bookmark</h3>
          <input type="text" ></input>
          <input type="text" ></input>
          <button onClick={()=> newSource(source.name, source.from, source.language)}>Tambah Bookmark</button>
          <button onClick={checkAuth}>tambah playlist</button>
        </li>  
      }
      
      {auth && 
        <li>
          <button onClick={signOut}>logout</button>
        </li>
      }
      
    </ul>
    </>
  )
}

export default ActionBar;
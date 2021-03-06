import { useContext, useState} from "react"
import { AuthContext } from "../context/AuthContext.js";
import LoginForm from "./actionbarchild/LoginForm.js";
import SourceForm from "./actionbarchild/SourceForm.js";
import BookmarkForm from "./actionbarchild/BookmarkForm.js";

const ActionBar = () => {
  const { auth, signOut} = useContext(AuthContext)
  
  const [input, setInput] = useState("source")
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
        </li>}

      {!auth && <LoginForm />}

      {auth && input == "source" && <SourceForm />}

      {auth && input == "bookmark" && <BookmarkForm />}
      
      {auth && 
        <li>
          <button onClick={signOut}>logout</button>
        </li>}
      
    </ul>
    </>
  )
}

export default ActionBar;
import { useContext, useState} from "react"
import { AuthContext } from "../../context/AuthContext.js";

const LoginForm = () => {
  const { signIn, authError} = useContext(AuthContext)

  const [login, setLogin] = useState({
    email : "",
    pass : ""
  })

  const handleLogin = () => {
    signIn(login.email, login.pass)
    setLogin({email: "", pass: ""})
  }

  return (
    <li className="loginForm">
      <h3>Login</h3>
      {authError.error && <p>{authError.msg}</p>}
      <input type="text" value={login.email} placeholder="User Email"
        onChange={(e)=> setLogin(prev => ({...prev, email : e.target.value}))}>
      </input>
      <input type="text" value={login.pass} placeholder="User Password"
        onChange={(e)=> setLogin(prev => ({...prev, pass : e.target.value}))}></input>
      <button onClick={()=> handleLogin()}>login</button>
    </li>
  )
}

export default LoginForm;
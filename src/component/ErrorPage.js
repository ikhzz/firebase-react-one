import { useHistory } from "react-router";

const ErrorPage = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  }

  return (
    <div className="home">
      <h1>Page Your Requested Is Not Exist</h1>
      <button onClick={goHome}>Home</button>
    </div>
  )
}

export default ErrorPage;
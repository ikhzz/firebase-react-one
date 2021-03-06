import { useContext} from "react"
import { SourceContext } from "../context/SourceContext";

const SourceLearning = () => {
  const {source} = useContext(SourceContext);
  console.log(source)
  //source && test(source)
  return (
    <div className="source">
      <h1>Source</h1>
      <ul className="allSource">{source && test(source)}</ul>
    </div>
  )
}

export default SourceLearning;

function test(data){
  
  return Object.entries(data).map(([key,value]) => {
    return (
      <li key={key}>
        <p>{key}</p>
        <p>From : {value["from"]}</p>
        <p>Language : {value["language"]}</p>
        <p>Name : {value["name"]}</p>
        <button>Daftar Playlist</button>
      </li>
    )
  })
}
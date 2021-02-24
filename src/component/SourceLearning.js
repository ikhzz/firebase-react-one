import { useContext} from "react"
import { SourceContext } from "../context/SourceContext";

const SourceLearning = () => {
  const {source} = useContext(SourceContext);
  console.log(source)
  //source && test(source)
  return (
    <div>
      <h1>Content</h1>
      <ul>{source && test(source)}</ul>
    </div>
  )
}

export default SourceLearning;

function test(data){
  
  return Object.entries(data).map(([key,value]) => {
    return (
      <li key={key}>
        <p>{key}</p>
        <p>{value["from"]}</p>
        <p>{value["language"]}</p>
        <p>{value["name"]}</p>
        <button>Daftar Playlist</button>
      </li>
    )
  })
}
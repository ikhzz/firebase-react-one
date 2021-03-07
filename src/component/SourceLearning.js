import { useContext} from "react"
import { SourceContext } from "../context/SourceContext";
import SourceList from "./SourceList";

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
  
  return Object.entries(data).map(([key, value]) => {
    console.log(key)
    console.log(value)
    return (
      <li key={key}>
        <SourceList  keys={key} detail={value}/>
      </li>
    )
  })
}
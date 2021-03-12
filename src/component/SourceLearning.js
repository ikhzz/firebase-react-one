import { useContext} from "react"
import { SourceContext } from "../context/SourceContext";
import SkeletonSource from "./skeleton/SkeletonSource";
import SourceList from "./SourceList";

const SourceLearning = () => {
  const {source} = useContext(SourceContext);
  return (
    <div className="source">
      <h1>Source</h1>
      <ul className="allSource">
        {!source && [0, 1, 2].map(i => <SkeletonSource key={i}/>)}
        {source && objectMap(source)}
      </ul>
    </div>
  )
}

export default SourceLearning;
// figuring out how to map object with every model type
// object map for data list
function objectMap(data){
  return Object.entries(data).map(([key, value]) => {
    return (
      <li key={key}>
        <SourceList  keys={key} detail={value}/>
      </li>
    )
  })
}
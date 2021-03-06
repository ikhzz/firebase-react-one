import { useContext, useState} from "react";
import { SourceContext } from "../../context/SourceContext.js";

const SourceForm = () => {
  const {newSource} = useContext(SourceContext)

  const [source, setSource] = useState({
    name : "",
    from : "",
    language: ""
  })

  const inputSource = () => {
    newSource(source.name, source.from, source.language)
    setSource({
      name : "",
      from : "",
      language: ""})
  }

  return (
    <li>
      <h3>Tambah Sumber</h3>
      <input type="text" value={source.name} placeholder="Source Name"
      onChange={(e)=> setSource(prev => ({...prev, name : e.target.value}))}></input>
      <input type="text" value={source.from} placeholder="Source From"
      onChange={(e)=> setSource(prev => ({...prev, from : e.target.value}))}></input>
      <input type="text" value={source.language} placeholder="Source Language"
      onChange={(e)=> setSource(prev => ({...prev, language : e.target.value}))}></input>
      <button onClick={()=> inputSource()}>tambah sumber</button>
    </li>
  )
}

export default SourceForm;
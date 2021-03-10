import { useContext, useState} from "react";
import { SourceContext } from "../../context/SourceContext.js";

const SourceForm = () => {
  const {newSource} = useContext(SourceContext)

  const [source, setSource] = useState({
    name : "",
    from : "",
    language: "",
    image : null
  })

  const inputSource = () => {
    newSource(source.name, source.from, source.language, source.image)
    setSource({
      name : "",
      from : "",
      language: "",
      image : null
    })
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
      <input type="file" onChange={(e) => setSource(prev => ({...prev, image: e.target.files[0]}))}></input>
      <button onClick={()=> inputSource()}>tambah sumber</button>
    </li>
  )
}

export default SourceForm;
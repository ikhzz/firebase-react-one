import { createContext, useState, useEffect } from "react";
import firebase from "../firebaseConfig.js"

export const SourceContext = createContext(),
  database = firebase.database(),

SourceContextProvider = (props) => {
  const [source, setSource] = useState(null)

  useEffect(()=> getSource(), [])
  const getSource = () => {
    database.ref("source").get().then(res => {
      //console.log(res.val())
      setSource(res.val())
    })
    .catch(err => console.log(err))
  }
  //console.log(source)
  const newSource = (name, from, language ) => {
    database.ref("source").push().set({
      name,
      from,
      language 
    }).then(getSource())
    .catch(err => console.log(err))
  }
  const newPlaylist = (id, name, desc) => {
    database.ref(`source/${id}/list/`).push().set({
      name,
      desc
    }).then(getSource())
    .catch(err => console.log(err))
  }
  return (
    <SourceContext.Provider value={{source, newSource, newPlaylist}}>
      {props.children}
    </SourceContext.Provider>
  )
};


export default SourceContextProvider;
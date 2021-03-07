import { createContext, useState, useEffect, useContext } from "react";
import {firebase} from "../firebaseConfig.js";
import {StorageContext} from "./StorageContext";

export const SourceContext = createContext(),
  database = firebase.database(),

SourceContextProvider = (props) => {
  const [source, setSource] = useState(null)
  const sourceRef = database.ref('source')
  const {uploadImage} = useContext(StorageContext)

  useEffect(()=> getSource(), [])
  const getSource = () => {
    database.ref("source").get().then(res => {
      //console.log(res.val())
      setSource(res.val())
    })
    .catch(err => console.log(err))
  }
  //console.log(source)
  const newSource = (name, from, language, image ) => {
    const push = sourceRef.push()
    push.set({ name, from, language }).then(() => {
      getSource()
      uploadImage(push.key, image)
      console.log(push.key)
    })
    .catch(err => console.log(err))
  }
  const newPlaylist = (id, name, desc) => {
    const push = sourceRef.child(`/${id}/list/`).push()
    push.set({name, desc}).then(getSource())
    .catch(err => console.log(err))
  }
  return (
    <SourceContext.Provider value={{source, newSource, newPlaylist}}>
      {props.children}
    </SourceContext.Provider>
  )
};


export default SourceContextProvider;
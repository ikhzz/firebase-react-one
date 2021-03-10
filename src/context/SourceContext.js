import { createContext, useState, useEffect, useContext } from "react";
import {firebase} from "../firebaseConfig.js";
import {StorageContext} from "./StorageContext";

export const SourceContext = createContext(),
  database = firebase.database(),
// data provider context
SourceContextProvider = (props) => {
  // state for every type of data
  const [source, setSource] = useState(null)
  const [profile, setProfile] = useState(null)
  const [project, setProject] = useState(null)
  const [bookmark, setBookmark] = useState(null)

  const sourceRef = database.ref('source')
  const {uploadImage} = useContext(StorageContext)
  // figuring out how to use reducer for manage data state
  // method to get source data
  const getSource = () => {
    sourceRef.get().then(res => {
      setSource(res.val())}).catch(err => console.log(err))
  }
  // method to get project data
  const getProject = () => {
    database.ref('project').get().then(res => {
      setProject(res.val())}).catch(err => console.log(err))
  }
  // method to get bookmark data
  const getBookmark = () => {
    database.ref('bookmark').get().then(res => {
      setBookmark(res.val())}).catch(err => console.log(err))
  }
  // get all data after the app first load
  useEffect(()=> {
    getSource()
    getProject()
    getBookmark()
    database.ref('profile').get().then(res => {
      setProfile(res.val())
    })    
  }, [])
  // method to add new source data
  const newSource = (name, from, language, image ) => {
    const push = sourceRef.push()
    push.set({ name, from, language }).then(() => {
      getSource()
      uploadImage(push.key, image)
      console.log(push.key)
    })
    .catch(err => console.log(err))
  }
  // method to add new playlist data
  const newPlaylist = (id, name, desc) => {
    const push = sourceRef.child(`/${id}/list/`).push()
    push.set({name, desc}).then(getSource())
    .catch(err => console.log(err))
  }
  // method to add project data
  const newProject = (title, desc, language, link) => {
    database.ref('project').push({ title, desc, language, link })
      .then(getProject()).catch()
  }
  // method to add bookmark data
  const newBookmark = (name, desc, link) => {
    database.ref('bookmark').push({name, desc, link})
      .then(getBookmark()).catch(err => console.log(err))
  }
  // add delete method if things work out
  return (
    <SourceContext.Provider value={{source, profile, project, bookmark, newSource, newPlaylist, newProject, newBookmark}}>
      {props.children}
    </SourceContext.Provider>
  )
};

export default SourceContextProvider;
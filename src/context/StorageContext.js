import { createContext } from "react";
import {storage} from "../firebaseConfig.js";

export const StorageContext = createContext(),

StorageContextProvider = (props) => {
  const sourceRef = storage.ref('source');

  const uploadImage = (id, image) => {
    console.log(image)
    sourceRef.child(`${id}.jpg`).put(image).then(console.log('success upload'))
  }
  
  return (
    <StorageContext.Provider value={{ uploadImage }}>
      {props.children}
    </StorageContext.Provider>
  )
}

export default StorageContextProvider;
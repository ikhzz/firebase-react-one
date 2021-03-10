import { createContext } from "react";
import {storage} from "../firebaseConfig.js";

export const StorageContext = createContext(),
// storage provider context
StorageContextProvider = (props) => {
  const sourceRef = storage.ref('source');
  // method to upload image
  const uploadImage = (id, image) => {
    sourceRef.child(`${id}.jpg`).put(image).then(console.log('success upload'))
  }
  
  return (
    <StorageContext.Provider value={{ uploadImage }}>
      {props.children}
    </StorageContext.Provider>
  )
}

export default StorageContextProvider;
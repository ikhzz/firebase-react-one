import { useState, useEffect } from "react";
import {storage} from '../firebaseConfig.js';
import { useHistory } from "react-router-dom";

const SourceList = ({keys, detail}) => {
  const history = useHistory();
  const [url, setUrl] = useState(null)
  console.log(keys)
  
  useEffect(()=> {
    storage.ref(`source/${keys}.jpg`).getDownloadURL().then(url => {
      setUrl(url)
    })
  },[])
  
  const moveToDetail = () => {
    if(url){
      history.push({
        pathname: `/sourcelist/${keys}`,
        state: url
      })
    } else {
      console.log("tunggu brah gambarnya blum ada")
    } 
  }
  return (
    <ul className="sourceList">
      <li>
        {url && <img src={url} alt='icon'/>}
      </li>
      <li>
        <span>From</span><span>: {detail["from"]}</span>
      </li>
      <li>
        <span>Language </span><span>: {detail["language"]}</span>
      </li>
      <li>
        <span>Name</span><span>: {detail["name"]}</span>
      </li>
      <li>
        <button onClick={moveToDetail}>Playlist</button>
      </li>
    </ul>
  )
}

export default SourceList;
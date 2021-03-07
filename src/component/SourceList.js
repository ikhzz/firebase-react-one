import { useState, useEffect } from "react";
import {storage} from '../firebaseConfig.js';
import { useHistory } from "react-router-dom";

const SourceList = ({keys, detail}) => {
  const [url, setUrl] = useState(null)
  console.log(keys)
  
  useEffect(()=> {
    storage.ref(`source/${keys}.jpg`).getDownloadURL().then(url => {
      setUrl(url)
    })
  },[])
  let history = useHistory()
  const moveToDetail = () => {
    history.push({
      pathname: `/sourcelist/${keys}`,
      state: detail
    })
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
        <button>add playlist</button>
      </li>
    </ul>
  )
}

export default SourceList;
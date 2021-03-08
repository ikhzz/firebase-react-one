import { useState, useContext } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import { SourceContext } from "../context/SourceContext.js";

const SourceDetail = () => {
  const [playlist, setPLaylist] = useState({
    playlistName: '', playlistDesc: ''
  }),
    [display, setDisplay] = useState('none'),
    {auth} = useContext(AuthContext),
    {source, newPlaylist} = useContext(SourceContext),
    {id} = useParams(),
    location = useLocation(),
    history = useHistory(),

  inputPlaylist = () => {
    newPlaylist(id, playlist.playlistName, playlist.playlistDesc)
    setDisplay('none')
    setPLaylist({playlistName: '', playlistDesc: ''})
  }

  return (
    <div className="detail" >
      {source &&  <>
       <ul className='inputPlaylist' style={{display}}>
        <li>
          <span onClick={()=> setDisplay("none")}>X</span>
        </li>
        <li>
          <input type="text" placeholder='Playlist Name' value={playlist.playlistName}
          onChange={e => setPLaylist(prev => ({...prev, playlistName: e.target.value}))}
          />
          <textarea placeholder='Playlist Desc' value={playlist.playlistDesc}
          onChange={e => setPLaylist(prev => ({...prev, playlistDesc: e.target.value}))}
          ></textarea>
          <button onClick={inputPlaylist}>Add Playlist</button> 
        </li>
      </ul>
      <section>
        <h1>Detail for {source[id]['name']}</h1>
      </section>
      <section className="head">
        <img src={location.state} alt="profile" />
        <p>Name : {source[id]['name']}</p>
        <p>From : {source[id]['from']}</p>
        <p>Language : {source[id]['language']}</p>
        <div>
          <button onClick={()=>(history.goBack())} >Back</button>
          {auth && <button onClick={()=> setDisplay('grid')}>add playlist</button>}
        </div>
      </section>
      <section>
        <ul className="detailList">
          {source[id]['list'] && generateList(source[id]['list'], auth)}
        </ul>
      </section> 
      </>
    }</div>
  )
}

function generateList(data, auth) {
  return Object.entries(data).map(([key,value]) => {
    return (
      <li  key={key}>
        <span>Playlist Name</span><span>: {value['desc']}</span>
        <span>Playlist Desc</span><span>: {value['name']}</span>
        <span>
          {/* on the second thought to add another layer list pages is annoying, on hold for idea */}
          {auth && <button>Add Notes</button>}
          <button>Check notes</button>
        </span>
      </li>
    )
  })
}

export default SourceDetail;
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {firebase} from "../firebaseConfig.js"

const database = firebase.database(),

SourceDetail = () => {
  const [lists, setList] = useState(null),
    {id} = useParams(),
    location = useLocation()
  console.log(id)
  console.log(location.state)
  useEffect(()=> {
    // database.ref("source").child(id)
    //   .child("list").get()
    //   .then(res => {
        
    //     console.log(res)
    //     console.log(res.val())
    //     // Object.entries(res.val()).forEach(el => {
    //     //   setList(el)
    //     // });
    //     const data = [res.val()]
    //     setList(data)
    //     console.log(lists)
    //   })
    //   .catch(err => console.log(err))
  }, [])

  return (
    <section>
      {/* <ul>
        {lists && Object.entries(lists[0]).map(([key, value]) => {
          return (
            <li key={key}>
              <p>{value["playlistDesc"]}</p>
              <p>{value["playlistName"]}</p>
              <button>lihat catatan</button>
              <button>tambah catatan</button>
            </li>
          )
        })}
      </ul> */}
    </section>
  )
}

function generateList(data) {
  return Object.entries(data[0]).map(([key,value]) => {
    return (
      <li key={key}>
        <p>{key}</p>
        <p>{value}</p>
      </li>
    )
  })
}

export default SourceDetail;
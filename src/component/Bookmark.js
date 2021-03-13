import { SourceContext } from "../context/SourceContext.js";
import { useContext } from "react";
import SkeletonList from "./skeleton/SkeletonList.js";

const Bookmark = () => {
  const {bookmark} = useContext(SourceContext)
  return (
    <div className="bookmark">
      <section><h1>My Bookmark</h1></section>
      <ul>
        {!bookmark && [0, 1, 2, 4].map(i => <SkeletonList key={i} /> )}
        
        {bookmark && objectMap(bookmark)}
      </ul>
    </div>
  )
}

export default Bookmark;
// figuring out how to map object with every model type
// object map for data list
const objectMap = (data) => {
  return Object.entries(data).map(([key, value]) => {
    return (
      <li key={key}>
        <span>Name</span> <span>: {value['name']}</span>
        <span>Description</span> <span>: {value['desc']}</span>
        <span>Link</span> <span>: <a href={value['link']}>{value['name']}</a></span>
      </li>
    )
  })
}
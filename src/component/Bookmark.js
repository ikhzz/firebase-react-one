import { SourceContext } from "../context/SourceContext.js";
import { useContext } from "react";

const Bookmark = () => {
  const {bookmark} = useContext(SourceContext)
  console.log(bookmark)
  return (
    <div className="bookmark">
      <section><h1>My Bookmark</h1></section>
      <ul>
        {bookmark && test(bookmark)}
      </ul>
    </div>
  )
}

export default Bookmark;

const test = (data) => {
  return Object.entries(data).map(([key, value]) => {
    return (
      <li key={key}>
        <span>Name</span> <span>: {value['name']}</span>
        <span>Description</span> <span>: {value['desc']}</span>
        <span>Link</span> <span>: {value['link']}</span>
      </li>
    )
  })
}
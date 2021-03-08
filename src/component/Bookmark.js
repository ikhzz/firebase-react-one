import { SourceContext } from "../context/SourceContext.js";
import { useState, useContext } from "react";

const Bookmark = () => {
  const {bookmark} = useContext(SourceContext)
  console.log(bookmark)
  return (
    <div>
      <section><h1>My Bookmark</h1></section>
      <ul>
        <li>
          <p>tes</p>  
        </li>
        <li>
          <p>tes</p>  
        </li>
        <li>
          <p>tes</p>  
        </li>
      </ul>
    </div>
  )
}

export default Bookmark;
import { SourceContext } from "../../context/SourceContext";
import { useContext, useState } from "react";

const BookmarkForm = () => {
  const {newBookmark} = useContext(SourceContext);
  const [bookmark, setBookmark] = useState({ name: '', desc: '', link: ''})

  const handleInput = () => {
    newBookmark(bookmark.name, bookmark.desc, bookmark.link)
    setBookmark({ name: '', desc: '', link: '' })
  }

  return (
    <li>
      <h3>Tambah Bookmark</h3>
      <input type="text" placeholder="Bookmark Name" value={bookmark.name}
      onChange={e => setBookmark(prev => ({...prev, name: e.target.value}))} />
      <input type="text" placeholder="Bookmark Desc" value={bookmark.desc}
      onChange={e => setBookmark(prev => ({...prev, desc: e.target.value}))} />
      <input type="text" placeholder="Bookmark Link" value={bookmark.link}
      onChange={e => setBookmark(prev => ({...prev, link: e.target.value}))} />
      <button onClick={handleInput}>Tambah Bookmark</button>
    </li>
  )
}

export default BookmarkForm;
const BookmarkForm = () => {
  
  return (
    <li>
      <h3>Tambah Bookmark</h3>
      <input type="text" placeholder="Bookmark Name"></input>
      <input type="text" placeholder="Bookmark Desc"></input>
      <input type="text" placeholder="Bookmark Link"></input>
      <button onClick={()=> console.log("tes")}>Tambah Bookmark</button>
    </li>
  )
}

export default BookmarkForm;
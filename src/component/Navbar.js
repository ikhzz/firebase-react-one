import { Link } from "react-router-dom";
import img from '../assets/IMG_0109 (1).JPG';

const Navbar = () => {
  return (
    <aside >
      <ul>
        <li>
          <img src={img} alt="icon" />
        </li>
        <li className="link">
          <Link to="/">Home</Link>
          <Link to="/allSource">Source</Link>
          <Link to="/bookmark">Bookmark</Link>
          <Link to="/myprofile">My Profile</Link>
        </li>
        <li>
          <p>©2020 by Fikri</p>
        </li>
      </ul>
    </aside>
  )
}

export default Navbar
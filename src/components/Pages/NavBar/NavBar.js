import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-bar-parent">
        <NavLink to="./About">
          <li>About</li>
        </NavLink>
        <NavLink to="./">
          <h2>
            <span className="home-letter">A</span>
          </h2>
        </NavLink>
        <NavLink to="./Contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;

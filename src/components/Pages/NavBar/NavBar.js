import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-bar-parent">
          <section className="left-links-parent">
            <NavLink to="./">
              <h2>
                <span className="home-letter">A</span>
              </h2>
            </NavLink>
            <NavLink to="./About">
              <li>About</li>
            </NavLink>
            <NavLink to="./Contact">
              <li>Contact</li>
            </NavLink>
          </section>

          <a
            className="github-parent"
            href="https://github.com/austinhansen97"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.pngrepo.com/png/331408/512/github.png"
              alt="github logo"
            ></img>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

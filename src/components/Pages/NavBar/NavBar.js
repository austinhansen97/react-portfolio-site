import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-bar-parent">
        <a href="./About">
          <li>About</li>
        </a>
        <a href="./Home">
          <h2>
            <span className="home-letter">A</span>
          </h2>
        </a>
        <a href="./Contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;

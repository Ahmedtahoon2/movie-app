import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Movie</Link>
        </div>
        <nav className="nav-links">
          <li>
            <NavLink to="/watchlist">Watch list</NavLink>
          </li>
          <li>
            <NavLink to="/watched">Watched</NavLink>
          </li>
          <li>
            <NavLink className="btn" to="/add">
              Add
            </NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;

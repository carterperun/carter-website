
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">My App</h1>
      <ul className="navbar-links">
        <li><a href="#HOME">Home</a></li>
        <li><a href="#ABOUT">About</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
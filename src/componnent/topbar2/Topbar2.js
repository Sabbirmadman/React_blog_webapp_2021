import "./topbar2.css";
import { Link } from "react-router-dom";

const Topbar2 = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="/" className="nav-link">
            <span className="link-text">Blog App</span>
            <i className="fas fa-arrow-alt-circle-right"></i>
          </a>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i class="fas fa-home"></i>
            <span className="link-text">Home</span>
          </Link>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fab fa-react"></i>
            <span className="link-text">Catagory</span>
          </a>
        </li>
        <li className="nav-item">
          <Link to="/write" className="nav-link">
            <i class="fas fa-blog"></i>
            <span className="link-text">Create Blog</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i class="fas fa-user"></i>
            <span className="link-text">Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <i class="fas fa-user-plus"></i>
            <span className="link-text">Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar2;

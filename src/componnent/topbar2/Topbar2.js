import "./topbar2.css";
const Topbar2 = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="/" className="nav-link">
            <span className="link-text">Sabbir Ahmed</span>
            <i className="fas fa-arrow-alt-circle-right"></i>
          </a>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fas fa-code"></i>
            <span className="link-text">Link 1</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fab fa-react"></i>
            <span className="link-text">Link 2</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fab fa-js-square"></i>
            <span className="link-text">Link 3</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link last">
            <i className="fab fa-python"></i>
            <span className="link-text">Link 4</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar2;

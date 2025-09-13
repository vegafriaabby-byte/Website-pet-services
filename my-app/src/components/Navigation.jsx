import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="logo">
            logo
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

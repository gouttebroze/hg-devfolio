import { Outlet, Link } from "react-router";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Welcome - LOGO</a>
        </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </nav>
      <Outlet />
    </div>  
  )
}

import {Link} from 'react-router-dom'
import './index.css'

// Write your JS code here
const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="img-logo"
        alt="wave"
      />
      <p className="logo">Wave</p>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </header>
)
export default Header

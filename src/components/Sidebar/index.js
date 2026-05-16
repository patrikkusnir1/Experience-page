import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoS from "../../assets/images/patrik.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHome, faEnvelope, faSuitcase, faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="experience-link"
          to="/experience"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faEnvelope}
            color="#4d4d4e"
            className="contact-page"
          />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/patrik-ku%C5%A1n%C3%ADr-6abb1a109/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://wa.me/79186015947">
            <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://t.me/patrik523">
            <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
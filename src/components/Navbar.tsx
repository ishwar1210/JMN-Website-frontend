import '../style/Navbar.css'
import { useState } from 'react'

const navItems = [
  { label: 'What We Do', hasDropdown: true },
  { label: 'What We Think' },
  { label: 'About JMN', hasDropdown: true },
  { label: 'Careers' },
  { label: 'Contact Us' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="jmn-navbar">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid jmn-navbar__inner">
          <a className="navbar-brand jmn-navbar__brand" href="/" aria-label="JMN Infotech home">
          <img
            className="jmn-navbar__logo"
            src="/JMN_New_Logo-removebg.png"
            alt="JMN Infotech"
          />
        </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="primaryNavbar"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse jmn-navbar__collapse ${
              isOpen ? 'show' : ''
            }`}
            id="primaryNavbar"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 jmn-navbar__nav">
              {navItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <a
                    className={`nav-link jmn-navbar__link ${
                      item.hasDropdown ? 'jmn-navbar__link--dropdown' : ''
                    }`}
                    href="#"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

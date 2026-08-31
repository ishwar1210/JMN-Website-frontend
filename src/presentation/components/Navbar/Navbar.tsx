import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import logoImg from '@/assets/JMN_New_Logo.png'
import { useScroll } from '@/presentation/hooks/useScroll'
import { useNavbarData } from '@/presentation/hooks/useNavbarData'
import '@/presentation/styles/css/Navbar.css'

export const Navbar: React.FC = () => {
  const isScrolled = useScroll(10)
  const { whatWeDo, technologies, isLoading } = useNavbarData()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(prev => (prev === name ? null : name))
  }

  return (
    <header className={`navbar navbar-expand-lg fixed-top navbar-header ${isScrolled ? 'navbar-transparent' : 'navbar-white'}`}>
      <div className="container">
        {/* Brand Logo */}
        <a href="/" className="navbar-brand me-4">
          <img src={logoImg} alt="JMN INFOTECH" />
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler border-0 shadow-none p-1"
          type="button"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navbar Collapsible Content */}
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            {/* What We Do Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent d-inline-flex align-items-center gap-1"
                onClick={() => toggleMobileDropdown('whatwedo')}
                type="button"
              >
                What We Do <ChevronDown className="dropdown-icon" />
              </button>

              <ul className={`dropdown-menu border-0 rounded-3 ${activeMobileDropdown === 'whatwedo' ? 'show d-block' : ''}`}>
                {isLoading ? (
                  <li className="dropdown-item text-muted text-center py-2">Loading items...</li>
                ) : whatWeDo.length > 0 ? (
                  whatWeDo.map(item => (
                    <li key={item.id}>
                      <a href={`/what-we-do/${item.slug}`} className="dropdown-item">
                        {item.name}
                        {item.category && <span className="dropdown-category">({item.category})</span>}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item text-muted text-center py-2">No items available</li>
                )}
              </ul>
            </li>

            {/* Technologies Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent d-inline-flex align-items-center gap-1"
                onClick={() => toggleMobileDropdown('technologies')}
                type="button"
              >
                Technologies <ChevronDown className="dropdown-icon" />
              </button>

              <ul className={`dropdown-menu border-0 rounded-3 ${activeMobileDropdown === 'technologies' ? 'show d-block' : ''}`}>
                {isLoading ? (
                  <li className="dropdown-item text-muted text-center py-2">Loading technologies...</li>
                ) : technologies.length > 0 ? (
                  technologies.map(item => (
                    <li key={item.id}>
                      <a href={`/technologies/${item.slug}`} className="dropdown-item">
                        {item.name}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item text-muted text-center py-2">No technologies available</li>
                )}
              </ul>
            </li>

            {/* Static Navigation Links */}
            <li className="nav-item">
              <a href="/career" className="nav-link">
                Career
              </a>
            </li>

            <li className="nav-item">
              <a href="/company" className="nav-link">
                Company
              </a>
            </li>

            <li className="nav-item">
              <a href="/contact-us" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Action Button */}
          <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
            <a href="/get-in-touch" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold btn-get-in-touch w-100 w-lg-auto text-center">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

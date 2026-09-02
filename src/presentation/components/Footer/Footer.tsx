import React from 'react'
import { ArrowRight } from 'lucide-react'
import logoImg from '@/assets/JMN_New_Logo.png'
import '@/presentation/styles/css/Footer.css'

/* Inline SVG Brand Icons */
const FacebookIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
)

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const YoutubeIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
)

export const Footer: React.FC = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand / Info */}
          <div className="footer-col footer-col-brand">
            <a href="/" className="footer-logo-link">
              <img src={logoImg} alt="JMN Infotech" className="footer-logo-img" />
            </a>
            <p className="footer-brand-desc">
              Building intelligent digital solutions that drive growth, efficiency, and
              innovation.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Twitter">
                <TwitterIcon size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="YouTube">
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/what-we-do">What We Do</a></li>
              <li><a href="/technologies">Technologies</a></li>
              <li><a href="/careers">Career</a></li>
              <li><a href="/company">Company</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              <li><a href="/solutions/aidc">AIDC Solutions</a></li>
              <li><a href="/solutions/enterprise">Enterprise Software</a></li>
              <li><a href="/solutions/asset-management">Asset Management</a></li>
              <li><a href="/solutions/iot-automation">IoT & Automation</a></li>
              <li><a href="/solutions/analytics">Analytics</a></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/our-team">Our Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/news">News & Insights</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="footer-col footer-col-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-newsletter-desc">
              Subscribe to get the latest updates and insights.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 JMN Infotech. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-legal-divider">|</span>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useState } from 'react'
import {
  User,
  Mail,
  Phone,
  Tag,
  PenLine,
  Send,
  ArrowRight,
  MapPin,
  ExternalLink,
} from 'lucide-react'
import { Navbar, Footer } from '@/presentation/components'
import bannerBg from '@/assets/Contact-us-bannar.png'
import ourOfficeImg from '@/assets/Contact-us-our-office.png'
import mailUsImg from '@/assets/Contact-us-Mail-us.png'
import callUsImg from '@/assets/Contact-us-Call-us.png'
import workingHoursImg from '@/assets/Contact-us-Working-hours.png'
import '@/presentation/styles/css/ContactPage.css'

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you shortly.')
  }

  return (
    <div className="contact-page-root">
      <Navbar />

      <main>
        {/* Banner Section (Rounded Floating Card) */}
        <section className="contact-banner-section">
          <div className="contact-container">
            <div
              className="contact-banner-card"
              style={{ backgroundImage: `url(${bannerBg})` }}
            >
              <div className="contact-banner-content">
                <nav className="contact-breadcrumb" aria-label="Breadcrumb">
                  <a href="/" className="contact-breadcrumb-link">Home</a>
                  <span className="contact-breadcrumb-sep">&gt;</span>
                  <span className="contact-breadcrumb-curr">Contact Us</span>
                </nav>
                <h1 className="contact-banner-title">Contact Us</h1>
                <div className="contact-banner-bar" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="contact-main-section">
          <div className="contact-container">
            <div className="contact-grid">
              {/* Left Form */}
              <div className="contact-form-card">
                <h2 className="contact-form-title">Get In Touch</h2>
                <p className="contact-form-desc">
                  Have a project in mind or need more information?<br />
                  Fill out the form and we'll get back to you soon.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-inputs-grid">
                    <div className="contact-input-wrap">
                      <User size={18} className="contact-input-icon" />
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div className="contact-input-wrap">
                      <Mail size={18} className="contact-input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div className="contact-input-wrap">
                      <Phone size={18} className="contact-input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Contact Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div className="contact-input-wrap">
                      <Tag size={18} className="contact-input-icon" />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-input-wrap contact-textarea-wrap">
                    <PenLine size={18} className="contact-input-icon contact-textarea-icon" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-textarea"
                      required
                    />
                  </div>

                  <div className="contact-submit-wrap">
                    <button type="submit" className="contact-submit-btn">
                      <span className="contact-submit-text">
                        Send Message <Send size={15} />
                      </span>
                      <span className="contact-submit-arrow">
                        <ArrowRight size={17} />
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Info Card */}
              <div className="contact-info-card">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <img src={ourOfficeImg} alt="Our Office" className="contact-info-img" />
                  </div>
                  <div className="contact-info-body">
                    <h3 className="contact-info-title">Our Office</h3>
                    <p className="contact-info-text">
                      JMN Infotech Pvt. Ltd.<br />
                      Nashik, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <img src={mailUsImg} alt="Email Us" className="contact-info-img" />
                  </div>
                  <div className="contact-info-body">
                    <h3 className="contact-info-title">Email Us</h3>
                    <a href="mailto:info@jmninfotech.com" className="contact-info-link">
                      info@jmninfotech.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <img src={callUsImg} alt="Call Us" className="contact-info-img" />
                  </div>
                  <div className="contact-info-body">
                    <h3 className="contact-info-title">Call Us</h3>
                    <a href="tel:+911234567890" className="contact-info-link">
                      +91 12345 67890
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <img src={workingHoursImg} alt="Working Hours" className="contact-info-img" />
                  </div>
                  <div className="contact-info-body">
                    <h3 className="contact-info-title">Working Hours</h3>
                    <p className="contact-info-text">
                      Mon - Sat : 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="contact-map-card">
              <iframe
                title="JMN Infotech Pvt. Ltd. Office Location (Satellite)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2483050440155!2d73.7530071!3d19.9560572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb53a6d723f5%3A0xc47dd25346ceb9ab!2sJMN%20Infotech%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="contact-map-iframe"
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="contact-map-badge">
                <div className="contact-map-badge-header">
                  <div className="contact-map-badge-name">
                    <MapPin size={16} className="contact-map-badge-icon" />
                    <span>JMN Infotech Pvt. Ltd.</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/YRE4SaDTHazM45Z97"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-map-badge-expand"
                    aria-label="Open in Google Maps"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
                <div className="contact-map-badge-addr">
                  Nashik,<br />Maharashtra, India
                </div>
                <a
                  href="https://maps.app.goo.gl/YRE4SaDTHazM45Z97"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-map-badge-link"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage

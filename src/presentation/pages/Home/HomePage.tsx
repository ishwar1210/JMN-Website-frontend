import React, { useEffect } from 'react'
import '@google/model-viewer'
import { Navbar, Footer } from '@/presentation/components'
import { useHomeData, useClientData } from '@/presentation/hooks'
import type { ClientItem } from '@/domain/entities/Client'
import { getImageUrl } from '@/shared/utils'
import startupSvgIcon    from '@/assets/imgi_7_startup.svg'
import mobileSvgIcon     from '@/assets/imgi_8_mobile.svg'
import computersSvgIcon  from '@/assets/imgi_9_computers.svg'
import worldSvgIcon      from '@/assets/imgi_10_world.svg'
import dealSvgIcon       from '@/assets/imgi_11_deal.svg'
import teamSvgIcon       from '@/assets/imgi_12_team.svg'
import LaptopImg         from '@/assets/Laptop.png'
import aidcImg           from '@/assets/AIDC-Solutions.png'
import enterpriseImg     from '@/assets/Enterprise-software.png'
import assetFleetImg     from '@/assets/Asset&Fleet-Management.png'
import warehouseImg      from '@/assets/Warehouse&inventory.png'
import iotImg            from '@/assets/Iot&Automation.png'
import analyticsImg      from '@/assets/Analytics&Insights.png'
import clientRetentionImg from '@/assets/whychoosejmn-client-s.png'
import successfulProjectsImg from '@/assets/whychoosejmn-successful-p.png'
import expertProfessionalsImg from '@/assets/whychoosejmn-export-pro.png'
import globalPresenceImg from '@/assets/whychoosejmn-global.png'
import dotShapeImg       from '@/assets/dot-shape.png'
import {
  ArrowRight, Building2,
  Factory, HeartPulse, Package, ShoppingBag, Landmark, GraduationCap, Car,
  Check,
} from 'lucide-react'
import '@/presentation/styles/css/Navbar.css'
import '@/presentation/styles/css/HomePage.css'

// ──────────────────────────────────────────────────────────────
// Static Data
// ──────────────────────────────────────────────────────────────
const solutions = [
  {
    id: 1, title: 'AIDC Solutions',
    desc: 'Barcode, RFID, QR & Data Capture Solutions',
    icon: <img src={aidcImg} alt="AIDC Solutions" style={{ width: '88px', height: '88px', objectFit: 'contain' }} />,
  },
  {
    id: 2, title: 'Enterprise Software',
    desc: 'Scalable & secure enterprise applications',
    icon: <img src={enterpriseImg} alt="Enterprise Software" style={{ width: '88px', height: '88px', objectFit: 'contain' }} />,
  },
  {
    id: 3, title: 'Asset & Fleet Management',
    desc: 'Track, monitor & optimize your assets',
    icon: <img src={assetFleetImg} alt="Asset & Fleet Management" style={{ width: '88px', height: '88px', objectFit: 'contain' }} />,
  },
  {
    id: 4, title: 'Warehouse & Inventory',
    desc: 'Smart inventory & warehouse management',
    icon: <img src={warehouseImg} alt="Warehouse & Inventory" style={{ width: '88px', height: '88px', objectFit: 'contain' }} />,
  },
  {
    id: 5, title: 'IoT & Automation',
    desc: 'Intelligent automation for smart operations',
    icon: <img src={iotImg} alt="IoT & Automation" style={{ width: '88px', height: '88px', objectFit: 'contain' }} />,
  },
  {
    id: 6, title: 'Analytics & Insights',
    desc: 'Data-driven insights for better decisions',
    icon: <img src={analyticsImg} alt="Analytics & Insights" style={{ width: '88px', height: '88px', objectFit: 'contain' }} />,
  },
]

const industries = [
  { id: 1, label: 'Manufacturing', icon: <Factory   size={34} />, color: 'cyan' },
  { id: 2, label: 'Healthcare',    icon: <HeartPulse size={34} />, color: 'pink' },
  { id: 3, label: 'Logistics',     icon: <Package    size={34} />, color: 'blue' },
  { id: 4, label: 'Retail',        icon: <ShoppingBag size={34} />, color: 'gold' },
  { id: 5, label: 'Banking',       icon: <Landmark   size={34} />, color: 'teal' },
  { id: 6, label: 'Government',    icon: <Building2  size={34} />, color: 'amber' },
  { id: 7, label: 'Education',     icon: <GraduationCap size={34} />, color: 'purple' },
  { id: 8, label: 'Automobile',    icon: <Car        size={34} />, color: 'magenta' },
]

const clientNames = [
  'SALGA', 'SIEMENS', 'TDK', 'kirloskar', 'iftas', 'NABARD',
  'Bosch', 'Honeywell', 'Wipro', 'ABB', 'Tata', 'L&T',
]

const whyFeatures = [
  'Agile & Transparent Process',
  'Scalable & Secure Solutions',
  'On-time Delivery',
  'Dedicated Support',
]

const whyStats = [
  { icon: <img src={clientRetentionImg} alt="Client Retention" className="hp-why-stat-img" />, value: '99%',  label: 'Client Retention' },
  { icon: <img src={successfulProjectsImg} alt="Successful Projects" className="hp-why-stat-img" />, value: '200+', label: 'Successful Projects' },
  { icon: <img src={expertProfessionalsImg} alt="Expert Professionals" className="hp-why-stat-img" />, value: '24+',  label: 'Expert Professionals' },
  { icon: <img src={globalPresenceImg} alt="Global Presence" className="hp-why-stat-img" />, value: '12+',  label: 'Global Presence' },
]

// ──────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────
export const HomePage: React.FC = () => {
  const { homeData, isLoading } = useHomeData()
  const { clients } = useClientData()

  /* Format client list for marquee (doubled for seamless infinite scroll) */
  const displayClients: ClientItem[] = clients.length > 0
    ? clients
    : clientNames.map((name, idx) => ({ id: idx + 1, client_name: name }))
  const marqueeClients = [...displayClients, ...displayClients]

  /* Intersection Observer for section reveal animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('hp-visible')
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.hp-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* Stats data */
  const formatSatisfaction = (val?: string | number): string => {
    if (!val) return '99%'
    const n = typeof val === 'string' ? parseFloat(val) : val
    return isNaN(n) ? '99%' : `${n}%`
  }
  const statsList = [
    { id: 1, svg: startupSvgIcon,   value: isLoading ? '…' : `${homeData?.company_exp ?? 12}+`,                          label: 'Years Experience'   },
    { id: 2, svg: mobileSvgIcon,    value: isLoading ? '…' : `${homeData?.apps_dev ?? 50}+`,                             label: 'Apps Developed'     },
    { id: 3, svg: computersSvgIcon, value: isLoading ? '…' : `${homeData?.project_dev ?? 200}+`,                        label: 'Projects Delivered' },
    { id: 4, svg: worldSvgIcon,     value: isLoading ? '…' : `${homeData?.countries_served ?? 12}+`,                    label: 'Countries Served'   },
    { id: 5, svg: dealSvgIcon,      value: isLoading ? '…' : formatSatisfaction(homeData?.client_satisfaction_percent),  label: 'Client Satisfaction'},
    { id: 6, svg: teamSvgIcon,      value: isLoading ? '…' : `${homeData?.talented_squad ?? 24}+`,                      label: 'Talented Squad'     },
  ]

  /* ─── JSX ─────────────────────────────────────────────────── */
  return (
    <div className="hp-root">
      <Navbar />

      <main>

        {/* ═══════════════════════════════════════════════════════
            SECTION 1 — HERO & STATS
            ═══════════════════════════════════════════════════════ */}
        <section className="hp-hero-wrapper">
          <div className="container">

            {/* Hero Row */}
            <div className="row align-items-center hp-hero-row">
              {/* Left: Text */}
              <div className="col-lg-6 hp-hero-text">
                <div className="hp-badge hp-reveal">Digital Innovation Partner</div>
                <h1 className="hp-hero-title hp-reveal">
                  Transforming Ideas<br />
                  Into Intelligent<br />
                  <span className="hp-hero-blue">Solutions</span>
                </h1>
                <p className="hp-hero-desc hp-reveal">
                  We build future-ready software and industry-focused solutions
                  that drive efficiency, growth, and digital transformation.
                </p>
                <div className="hp-hero-btns hp-reveal">
                  <a href="/what-we-do"    className="hp-btn-primary">Explore Solutions <ArrowRight size={16} /></a>
                  <a href="/technologies"  className="hp-btn-secondary">Our Technologies <ArrowRight size={16} /></a>
                </div>
              </div>

              {/* Right: Robot */}
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="hp-robot-slot hp-reveal">
                  <div className="hp-robot-container">
                    <div className="hp-robot-anim hp-traveling">
                      {React.createElement(
                        'model-viewer',
                        {
                          src: '/models/futuristic_flying_animated_robot_-_low_poly.glb',
                          alt: 'JMN Futuristic Robot',
                          'auto-rotate': '',
                          'camera-controls': '',
                          'disable-zoom': '',
                          'disable-tap': '',
                          autoplay: '',
                          'shadow-intensity': '1',
                          exposure: '1',
                          class: 'hp-robot-model',
                        },
                        React.createElement('div', { slot: 'progress-bar', style: { display: 'none' } })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Cards */}
            <div className="hp-impact-section hp-reveal">
              <div className="hp-impact-heading">
                <div className="hp-impact-eyebrow">
                  <span className="hp-eyebrow-dot" /> OUR IMPACT <span className="hp-eyebrow-dot" />
                </div>
                <h2 className="hp-impact-title">Delivering Impact That Matters</h2>
              </div>
              <div className="hp-stats-grid">
                {statsList.map((item) => (
                  <div key={item.id} className="hp-stat-card hp-reveal">
                    <div className="hp-stat-icon">
                      <img src={item.svg} alt="" className="hp-stat-svg" />
                    </div>
                    <div className="hp-stat-value">{item.value}</div>
                    <div className="hp-stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2 — SOLUTIONS
            ═══════════════════════════════════════════════════════ */}
        <section className="hp-solutions hp-section hp-reveal">
          <div className="container">
            <div className="row align-items-start g-5">
              <div className="col-lg-4 hp-solutions-left">
                <span className="hp-eyebrow-label">OUR SOLUTIONS</span>
                <h2 className="hp-section-title">End-to-End Solutions for Every Industry</h2>
                <p className="hp-section-desc">
                  From automation to analytics, we provide smart, scalable, and secure
                  solutions tailored to your business needs.
                </p>
                <a href="/what-we-do" className="hp-btn-outline">
                  View All Solutions <ArrowRight size={18} />
                </a>
              </div>
              <div className="col-lg-8">
                <div className="hp-sol-grid">
                  {solutions.map(s => (
                    <div key={s.id} className="hp-sol-card">
                      <div className="hp-sol-icon">
                        {s.icon}
                      </div>
                      <h3 className="hp-sol-title">{s.title}</h3>
                      <p className="hp-sol-desc">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — INDUSTRIES (Dark Card Container)
            ═══════════════════════════════════════════════════════ */}
        <section className="hp-industries hp-section hp-reveal">
          <div className="container">
            <div className="hp-ind-card-wrapper">
              <div className="row align-items-center g-5">
                <div className="col-lg-4 hp-ind-left">
                  <span className="hp-eyebrow-label hp-eyebrow-light">INDUSTRIES WE EMPOWER</span>
                  <h2 className="hp-section-title hp-title-light">
                    Technology That Drives Every Industry Forward
                  </h2>
                  <p className="hp-section-desc hp-desc-light">
                    Our deep domain knowledge helps us deliver custom solutions that solve
                    complex challenges across diverse industries.
                  </p>
                  <a href="/industries" className="hp-btn-primary hp-btn-gradient">
                    Explore Industries <ArrowRight size={18} />
                  </a>
                </div>
                <div className="col-lg-8">
                  <div className="hp-ind-grid">
                    {industries.map(ind => (
                      <div key={ind.id} className="hp-ind-card">
                        <div className={`hp-ind-icon hp-ind-icon-${ind.color}`}>{ind.icon}</div>
                        <span className="hp-ind-label">{ind.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 4 — CLIENTS (Marquee)
            ═══════════════════════════════════════════════════════ */}
        <section className="hp-clients hp-section hp-reveal">
          <div className="container">
            <div className="hp-clients-heading">
              <span className="hp-eyebrow-label">OUR CLIENTS</span>
              <h2 className="hp-section-title">Trusted by Leading Organizations</h2>
            </div>
          </div>
          <div className="hp-clients-track-wrap">
            <div className="hp-clients-track">
              {marqueeClients.map((client, i) => (
                <div key={`${client.id}-${i}`} className="hp-client-logo">
                  {client.logo_image ? (
                    <img
                      src={getImageUrl(client.logo_image)}
                      alt={client.client_name}
                      className="hp-client-logo-img"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                        const textEl = (e.currentTarget.parentNode as HTMLElement)?.querySelector('.hp-client-logo-text');
                        if (textEl) (textEl as HTMLElement).style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span
                    className="hp-client-logo-text"
                    style={{ display: client.logo_image ? 'none' : 'block' }}
                  >
                    {client.client_name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 5 — WHY JMN
            ═══════════════════════════════════════════════════════ */}
        <section className="hp-why hp-section hp-reveal">
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Left: Text */}
              <div className="col-lg-4">
                <span className="hp-eyebrow-label">WHY CHOOSE JMN</span>
                <h2 className="hp-section-title">We Deliver More Than Just Code</h2>
                <p className="hp-section-desc">
                  We combine technology, strategy, and creativity to deliver solutions
                  that create real business impact.
                </p>
                <ul className="hp-why-list">
                  {whyFeatures.map((f, i) => (
                    <li key={i} className="hp-why-item">
                      <span className="hp-why-check"><Check size={14} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center: Laptop image */}
              <div className="col-lg-4 d-flex justify-content-center">
                <div className="hp-why-img-wrap">
                  <img src={LaptopImg} alt="JMN Platform Dashboard" className="hp-why-img" />
                </div>
              </div>

              {/* Right: Stats */}
              <div className="col-lg-4">
                <div className="hp-why-stats">
                  {whyStats.map((s, i) => (
                    <div key={i} className="hp-why-stat">
                      <div className="hp-why-stat-icon">{s.icon}</div>
                      <div className="hp-why-stat-info">
                        <span className="hp-why-stat-value">{s.value}</span>
                        <span className="hp-why-stat-label">{s.label}</span>
                      </div>
                      <ArrowRight size={16} className="hp-why-stat-arrow" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 6 — CTA BANNER (with GLB Robot)
            ═══════════════════════════════════════════════════════ */}
        <section className="hp-cta hp-reveal">
          <div className="container">
            <div className="hp-cta-inner">
              {/* Dotted World Shape Background */}
              <img src={dotShapeImg} alt="" className="hp-cta-dot-bg" aria-hidden="true" />

              <div className="hp-cta-text">
                <h2 className="hp-cta-title">
                  Let's Build Something<br />Amazing Together
                </h2>
                <p className="hp-cta-desc">
                  Have a project in mind? Let's discuss how we can turn your ideas into reality.
                </p>
                <a href="/get-in-touch" className="hp-btn-primary hp-btn-gradient">
                  Start a Project <ArrowRight size={18} />
                </a>
              </div>
              <div className="hp-cta-robot">
                {React.createElement(
                  'model-viewer',
                  {
                    src: '/models/futuristic_flying_animated_robot_-_low_poly.glb',
                    alt: 'JMN Robot',
                    'auto-rotate': '',
                    autoplay: '',
                    'shadow-intensity': '0',
                    exposure: '1.3',
                    class: 'hp-cta-robot-model',
                  },
                  React.createElement('div', { slot: 'progress-bar', style: { display: 'none' } })
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default HomePage

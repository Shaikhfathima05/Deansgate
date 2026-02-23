import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Floor Plans', href: '#floorplans' },
  { label: 'Location', href: '#location' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy', isPage: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setMenuOpen(false);

    if (link.isPage) {
      navigate(link.href);
      return;
    }

    const id = link.href.replace('#', '');

    if (location.pathname !== '/') {
      navigate('/' + link.href);
      // Let the browser handle the hash on next render or use a hook
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => handleLinkClick({ href: '#home' })}>
          <span className="navbar__logo-text">DEANSGATE</span>
          <span className="navbar__logo-sub">by IVC Road</span>
        </div>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar__cta btn-primary"
          onClick={(e) => { e.preventDefault(); handleLinkClick({ href: '#contact' }); }}
        >
          Enquire Now
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className={`navbar__mobile-link ${activeSection === link.href.replace('#', '') ? 'navbar__mobile-link--active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary navbar__mobile-cta"
          onClick={(e) => { e.preventDefault(); handleLinkClick({ href: '#contact' }); }}
        >
          Enquire Now
        </a>
      </div>
    </nav>
  );
}

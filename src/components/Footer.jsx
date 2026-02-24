import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';


const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Floor Plans', href: '#floorplans' },
    { label: 'Location', href: '#location' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '/privacy-policy', isPage: true },
];

export default function Footer() {
    const year = 2026;
    const navigate = useNavigate();
    const location = useLocation();

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleLinkClick = (link) => {
        if (link.isPage) {
            navigate(link.href);
            return;
        }

        const id = link.href.replace('#', '');

        if (location.pathname !== '/') {
            navigate('/' + link.href);
            return;
        }

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__inner">
                        {/* Brand */}
                        <div className="footer__brand">
                            <div className="footer__logo">DEANSGATE</div>
                            <div className="footer__logo-sub">by IVC Road, Bengaluru</div>
                            <p className="footer__brand-desc">
                                A premium residential villament community redefining luxury living near
                                Kempegowda International Airport, North Bengaluru.
                            </p>
                            <div className="footer__social">
                                <a href="https://www.instagram.com/winstoneprojects?igsh=MTd0N3k0ejc0bjVyMA=="
                                    className="footer__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/winstoneprojects/"
                                    className="footer__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://wa.me/9535774179"
                                    className="footer__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5z"></path></svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__col">
                            <h4 className="footer__col-title">Quick Links</h4>
                            <ul className="footer__links">
                                {quickLinks.map(link => (
                                    <li key={link.label}>
                                        <a href={link.href} className="footer__link"
                                            onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__col">
                            <h4 className="footer__col-title">Contact Us</h4>
                            <div className="footer__contact-list">
                                <div className="footer__contact-item">
                                    <a href="tel:+919844935531">+91 98449 35531</a>
                                </div>
                                <div className="footer__contact-item">
                                    <a href="mailto:support@winstoneprojects.com">support@winstoneprojects.com</a>
                                </div>
                                <div className="footer__contact-item">
                                    <span>IVC Road, Yelahanka,<br />Bengaluru – 560064</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <p className="footer__copy">
                            © {year} Deansgate. All rights reserved. | RERA Registration No: PRM/KA/RERA/XXXXX
                        </p>
                        <p className="footer__disclaimer">
                            * Specification, dimensions & prices are subject to change without notice.
                        </p>
                        <button className="footer__scroll-top" onClick={scrollTop} aria-label="Scroll to top">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

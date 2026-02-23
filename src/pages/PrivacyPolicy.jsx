import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-policy">
            {/* Header */}
            <div className="privacy-policy__header">
                <div className="container">
                    <Link to="/" className="privacy-policy__back">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="privacy-policy__title">Privacy Policy</h1>
                    <p className="privacy-policy__subtitle">
                        Last Updated: February 23, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="privacy-policy__content">
                <div className="container">
                    <div className="privacy-policy__wrapper">
                        {/* Introduction */}
                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Introduction</h2>
                            <div className="gold-divider" />
                            <p>
                                Welcome to Deansgate by IVC Road. We are committed to protecting your personal
                                information and your right to privacy. This policy explains how we handle your
                                data when you visit our website or use our services.
                            </p>
                        </section>
                        |
                        {/* Information We Collect */}
                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Information We Collect</h2>
                            <div className="gold-divider" />
                            <p>
                                We collect information that you provide directly to us through inquiry forms,
                                newsletter signups, or direct communication. This includes your name, email,
                                phone number, and any property preferences you share with us.
                            </p>
                        </section>
                        |
                        {/* How We Use Information */}
                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">How We Use Information</h2>
                            <div className="gold-divider" />
                            <p>
                                We use your info to respond to inquiries, provide project updates,
                                process bookings, and improve our services. We do not sell your data
                                to third parties.
                            </p>
                        </section>
                        |
                        {/* Data Protection */}
                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Data Security</h2>
                            <div className="gold-divider" />
                            <p>
                                We implement technical and organizational security measures to protect
                                your data against unauthorized access. This includes encryption and
                                secure servers.
                            </p>
                        </section>
                        |
                        {/* Contact Information */}
                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Contact Information</h2>
                            <div className="gold-divider" />
                            <p>
                                For any privacy-related inquiries, please contact us at:
                            </p>
                            <div className="privacy-policy__contact-box">
                                <div className="privacy-policy__contact-item">
                                    <strong>Deansgate by IVC Road</strong>
                                    <p>IVC Road, Bengaluru, Karnataka</p>
                                </div>
                                <div className="privacy-policy__contact-item">
                                    <strong>Email:</strong>
                                    <p>privacy@deansgate.com</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="privacy-policy__footer-cta">
                <div className="container">
                    <h3>Have Questions About Your Privacy?</h3>
                    <p>Our team is here to help. Contact us for any privacy-related inquiries.</p>
                    <Link to="/#contact" className="btn-primary">
                        Contact Us
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
            <WhatsAppButton />
        </div>
    );
}

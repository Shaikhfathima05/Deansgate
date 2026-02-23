import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', unittype: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
        if (!form.phone.trim() || !/^[\d\s+\-()]{7,}$/.test(form.phone)) e.phone = 'Valid phone number is required';
        if (!form.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleChange = (e) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
        if (submitError) setSubmitError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { 
            setErrors(errs); 
            return; 
        }

        setLoading(true);
        setSubmitError('');

        try {
            const { data, error } = await supabase
                .from('contact_inquiries')
                .insert([
                    {
                        full_name: form.name,
                        email: form.email,
                        phone: form.phone,
                        unit_type: form.unittype || null,
                        message: form.message
                    }
                ]);

            if (error) {
                console.error('Supabase error:', error);
                throw error;
            }

            setSubmitted(true);
            setForm({ name: '', email: '', phone: '', unittype: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError(`Failed to submit enquiry: ${error.message}. Please try again or contact us directly.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__inner">
                    {/* Left — Info */}
                    <div className="contact__info">
                        <span className="section-label">Get In Touch</span>
                        <h2 className="section-title">
                            Start Your <span>Journey</span>
                        </h2>
                        <div className="gold-divider" />
                        <p className="contact__info-desc">
                            Speak with our sales team to learn more about Deansgate, available units,
                            and exclusive pricing. We'd love to guide you home.
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">📞</div>
                                <div>
                                    <span className="contact__detail-label">Phone</span>
                                    <a href="tel:+919844935531" className="contact__detail-value">+91 98449 35531</a>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon">✉️</div>
                                <div>
                                    <span className="contact__detail-label">Email</span>
                                    <a href="mailto:support@winstoneprojects.com" className="contact__detail-value">support@winstoneprojects.com</a>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon">📍</div>
                                <div>
                                    <span className="contact__detail-label">Address</span>
                                    <span className="contact__detail-value">IVC Road, Yelahanka,<br />Bengaluru – 560064, Karnataka</span>
                                </div>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon">🕐</div>
                                <div>
                                    <span className="contact__detail-label">Site Visit Hours</span>
                                    <span className="contact__detail-value">Mon – Sun: 10 AM – 6 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact__social">
                            <a href="https://www.instagram.com/winstoneprojects?igsh=MTd0N3k0ejc0bjVyMA==" 
                                className="contact__social-link" 
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/winstoneprojects/" 
                                className="contact__social-link" 
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="https://wa.me/919844935531" 
                                className="contact__social-link" 
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="contact__form-wrapper">
                        {submitted ? (
                            <div className="contact__success">
                                <div className="contact__success-icon">✅</div>
                                <h3>Thank You!</h3>
                                <p>We've received your enquiry. Our sales team will contact you within 24 hours.</p>
                                <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', unittype: '', message: '' }); }}>
                                    Send Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit} noValidate>
                                <h3 className="contact__form-title">Schedule a Site Visit</h3>
                                <p className="contact__form-sub">Fill in your details and we'll be in touch shortly.</p>

                                {submitError && (
                                    <div className="contact__error-banner">
                                        {submitError}
                                    </div>
                                )}

                                <div className="contact__form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        id="name" name="name" type="text" placeholder="John Doe"
                                        value={form.name} onChange={handleChange}
                                        className={errors.name ? 'input--error' : ''}
                                    />
                                    {errors.name && <span className="contact__error">{errors.name}</span>}
                                </div>

                                <div className="contact__form-row">
                                    <div className="contact__form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            id="email" name="email" type="email" placeholder="john@example.com"
                                            value={form.email} onChange={handleChange}
                                            className={errors.email ? 'input--error' : ''}
                                        />
                                        {errors.email && <span className="contact__error">{errors.email}</span>}
                                    </div>
                                    <div className="contact__form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                                            value={form.phone} onChange={handleChange}
                                            className={errors.phone ? 'input--error' : ''}
                                        />
                                        {errors.phone && <span className="contact__error">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="unittype">Interested In</label>
                                    <select 
                                        id="unittype" 
                                        name="unittype"
                                        value={form.unittype}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select unit type...</option>
                                        <option value="Garden Villament">Garden Villament</option>
                                        <option value="Terrace Villament">Terrace Villament</option>
                                        <option value="Duplex">Duplex</option>
                                    </select>
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message" name="message" rows={4}
                                        placeholder="I'd like to know more about..."
                                        value={form.message} onChange={handleChange}
                                        className={errors.message ? 'input--error' : ''}
                                    />
                                    {errors.message && <span className="contact__error">{errors.message}</span>}
                                </div>

                                <button type="submit" className="btn-primary contact__submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Enquiry'}
                                    {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

export default function Hero() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            
            tl.from('.hero__badge', {
                opacity: 0,
                y: 30,
                duration: 0.8,
            })
            .from('.hero__title', {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 1,
            }, '-=0.4')
            .from('.hero__tagline', {
                opacity: 0,
                y: 30,
                duration: 0.8,
            }, '-=0.6')
            .from('.hero__description', {
                opacity: 0,
                y: 30,
                duration: 0.8,
            }, '-=0.4')
            .from('.hero__stat', {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.6,
            }, '-=0.4')
            .from('.hero__cta-btn', {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 0.6,
            }, '-=0.3');
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero" ref={heroRef}>
            {/* Dark overlay for text depth */}
            <div className="hero__bg-overlay" />

            {/* Animated background orbs */}
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <div className="hero__orb hero__orb--3" />

            {/* Grid overlay */}
            <div className="hero__grid" />

            {/* Content */}
            <div className="hero__content" ref={contentRef}>
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    Premium Residential Villaments · IVC Road, Bengaluru
                </div>

                <h1 className="hero__title">
                    DEANSGATE
                </h1>

                <p className="hero__tagline">
                    Where Luxury Meets<br />
                    <span>Timeless Living</span>
                </p>

                <p className="hero__description">
                    An exclusive collection of Garden Villaments, Terrace Villaments &amp; Duplexes
                    crafted for the discerning few, nestled near Kempegowda International Airport.
                </p>

                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-value">3</span>
                        <span className="hero__stat-label">Unit Types</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value">2850+</span>
                        <span className="hero__stat-label">Sq.ft Saleable</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value">IVC Rd</span>
                        <span className="hero__stat-label">Bengaluru</span>
                    </div>
                </div>

                <div className="hero__ctas">
                    <button className="btn-primary hero__cta-btn" onClick={() => scrollTo('contact')}>
                        Enquire Now
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                    <button className="btn-outline hero__cta-btn" onClick={() => scrollTo('floorplans')}>
                        View Floor Plans
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-line" />
                <span>Scroll to explore</span>
            </div>
        </section>
    );
}

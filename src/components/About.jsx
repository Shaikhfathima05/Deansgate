import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './About.css';

const stats = [
    { label: 'Saleable Area', value: '2850', unit: 'sq.ft' },
    { label: 'Carpet Area', value: '1950', unit: 'sq.ft' },
    { label: 'Private Garden', value: '800', unit: 'sq.ft' },
    { label: 'Terrace Area', value: '400', unit: 'sq.ft' },
];

const highlights = [
    'Exclusive low-density community',
    'Premium fittings & smart home features',
    'Landscaped private gardens',
    'Curated by award-winning architects',
];

export default function About() {
    const titleRef = useRef(null);

    useEffect(() => {
        const words = titleRef.current.querySelectorAll('.word');
        
        gsap.fromTo(
            words,
            {
                opacity: 0,
                y: 50,
                rotationX: -90,
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            }
        );
    }, []);

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about__inner">
                    {/* Left — Text */}
                    <div className="about__text">
                        <span className="section-label">About the Project</span>
                        <h2 className="section-title" ref={titleRef}>
                            <span className="word">⭐</span>{' '}
                            <span className="word">A</span>{' '}
                            <span className="word">New</span>{' '}
                            <span className="word">Standard</span>{' '}
                            <span className="word">of</span>{' '}
                            <span className="word highlight">Premium</span>{' '}
                            <span className="word highlight">Living</span>
                        </h2>
                        <div className="gold-divider" />
                        <p className="about__desc">
                            Deansgate redefines luxury residential living on IVC Road, Bengaluru — one of the city's
                            fastest-growing corridors. Drawing inspiration from London's iconic Deansgate district,
                            the project brings a world-class architectural sensibility to North Bengaluru.
                        </p>
                        <p className="about__desc">
                            Designed as an exclusive villament community, each residence offers the privacy and
                            openness of an independent home, with the security and amenities of a premium apartment
                            complex. Garden Villaments, Terrace Villaments, and Duplexes are thoughtfully crafted
                            to meet every lifestyle preference.
                        </p>
                        <ul className="about__highlights">
                            {highlights.map((h, i) => (
                                <li key={i} className="about__highlight">
                                    <span className="about__highlight-icon">✦</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — Project Image + Stats */}
                    <div className="about__stats">
                        <div className="about__img-wrap">
                            <img
                                src="/images/img9.png"
                                alt="Deansgate Project Overview"
                                className="about__project-img"
                            />
                            <div className="about__img-badge">
                                <span className="about__img-badge-text">Deansgate · IVC Road</span>
                            </div>
                        </div>
                        <div className="about__stats-grid">
                            {stats.map((stat, i) => (
                                <div key={i} className="about__stat-card">
                                    <div className="about__stat-value">
                                        {stat.value}<span className="about__stat-unit">{stat.unit}</span>
                                    </div>
                                    <div className="about__stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="about__badge-strip">
                            <div className="about__badge-item">
                                <span>RERA</span>
                                <span>Registered</span>
                            </div>
                            <div className="about__badge-divider" />
                            <div className="about__badge-item">
                                <span>2026</span>
                                <span>Possession</span>
                            </div>
                            <div className="about__badge-divider" />
                            <div className="about__badge-item">
                                <span>100%</span>
                                <span>Vastu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

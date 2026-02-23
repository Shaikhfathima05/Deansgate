import React, { useState } from 'react';
import './FloorPlans.css';

const plans = [
    {
        id: 'garden',
        label: 'Garden Villament',
        tag: 'Ground Floor',
        icon: '🌿',
        image: '/images/img3.png',
        desc: 'A ground-floor luxury residence with an exclusive private garden, perfect for families who love outdoor living. Seamlessly blends indoor comfort with lush outdoor space.',
        specs: [
            { key: 'Saleable Area', value: '2850 sq.ft' },
            { key: 'Carpet Area', value: '1950 sq.ft' },
            { key: 'Private Garden', value: '800 sq.ft' },
            { key: 'Bedrooms', value: '3 BHK' },
            { key: 'Bathrooms', value: '3 + 1' },
            { key: 'Parking', value: '2 Covered' },
        ],
    },
    {
        id: 'terrace',
        label: 'Terrace Villament',
        tag: 'Top Floor',
        icon: '🌅',
        image: '/images/img4.png',
        desc: 'An exclusive top-floor residence with a private terrace offering panoramic views of the surrounding greenery and city skyline. The ultimate sky-high living experience.',
        specs: [
            { key: 'Saleable Area', value: '3100 sq.ft' },
            { key: 'Carpet Area', value: '2050 sq.ft' },
            { key: 'Private Terrace', value: '600 sq.ft' },
            { key: 'Bedrooms', value: '3 BHK' },
            { key: 'Bathrooms', value: '3 + 1' },
            { key: 'Parking', value: '2 Covered' },
        ],
    },
    {
        id: 'duplex',
        label: 'Duplex',
        tag: 'G + 1 Floor',
        icon: '🏛️',
        image: '/images/img5.png',
        desc: 'A sprawling two-level residence that combines the grandeur of an independent villa with the conveniences of a gated community. The largest and most premium offering.',
        specs: [
            { key: 'Saleable Area', value: '3600 sq.ft' },
            { key: 'Carpet Area', value: '2400 sq.ft' },
            { key: 'Terrace Area', value: '400 sq.ft' },
            { key: 'Bedrooms', value: '4 BHK' },
            { key: 'Bathrooms', value: '4 + 1' },
            { key: 'Parking', value: '2 Covered' },
        ],
    },
];

export default function FloorPlans() {
    const [active, setActive] = useState('garden');
    const plan = plans.find(p => p.id === active);

    return (
        <section id="floorplans" className="floorplans">
            <div className="container">
                <div className="floorplans__header">
                    <span className="section-label">Unit Plans</span>
                    <h2 className="section-title">
                        Choose Your <span>Ideal Home</span>
                    </h2>
                    <div className="gold-divider" />
                    <p className="section-subtitle">
                        Three distinct villament types, each crafted to offer a unique lifestyle experience
                        with uncompromising quality and space.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="floorplans__tabs">
                    {plans.map(p => (
                        <button
                            key={p.id}
                            className={`floorplans__tab ${active === p.id ? 'floorplans__tab--active' : ''}`}
                            onClick={() => setActive(p.id)}
                        >
                            <span>{p.icon}</span>
                            <span>{p.label}</span>
                            <span className="floorplans__tab-tag">{p.tag}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="floorplans__content" key={active}>
                    {/* Floor plan visual */}
                    <div className="floorplans__visual">
                        <div className="floorplans__plan-render">
                            <div className="floorplans__plan-header">
                                <div className="floorplans__plan-icon">{plan.icon}</div>
                                <div>
                                    <div className="floorplans__plan-name">{plan.label}</div>
                                    <div className="floorplans__plan-sublabel">Floor Plan — {plan.tag}</div>
                                </div>
                            </div>
                            <div className="floorplans__plan-img-wrap">
                                <img
                                    src={plan.image}
                                    alt={`${plan.label} Floor Plan`}
                                    className="floorplans__plan-img floorplans__plan-img--blur"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Specs */}
                    <div className="floorplans__specs">
                        <h3 className="floorplans__spec-title">{plan.label}</h3>
                        <p className="floorplans__spec-desc">{plan.desc}</p>
                        <div className="floorplans__spec-table">
                            {plan.specs.map((spec, i) => (
                                <div key={i} className="floorplans__spec-row">
                                    <span className="floorplans__spec-key">{spec.key}</span>
                                    <span className="floorplans__spec-val">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            className="btn-primary floorplans__enquire"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Enquire About This Unit
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import './Location.css';

const highlights = [
    {
        title: 'Kempegowda Int\'l Airport',
        distance: '~15 min',
        desc: 'Direct access via IVC Road to KIAL — ideal for frequent flyers and NRI investors.',
    },
    {
        title: 'Business Parks',
        distance: 'Nearby',
        desc: 'Manyata Tech Park, Kirloskar Business Park, and Aerospace SEZ within easy reach.',
    },
    {
        title: 'Tech Parks & IT Hubs',
        distance: '20–30 min',
        desc: 'Close to Hebbal IT cluster, Yelahanka tech corridor, and upcoming STRR connections.',
    },
    {
        title: 'Schools & Colleges',
        distance: 'In vicinity',
        desc: 'Canadian International School, Ryan International, Vidyashilp Academy nearby.',
    },
    {
        title: 'Hospitals & Healthcare',
        distance: 'Close by',
        desc: 'Columbia Asia, Manipal Hospital, and Apollo Clinic within a short drive.',
    },
    {
        title: 'Retail & Entertainment',
        distance: 'Minutes away',
        desc: 'Elements Mall, Esteem Mall, and upcoming retail corridors on NH-44.',
    },
];

const locationDetails = [
    { label: 'Address', value: 'IVC Road, North Bengaluru' },
    { label: 'Nearest Airport', value: 'KIAL — ~15 min' },
    { label: 'Nearest Metro', value: 'Nagawara — ~25 min' },
    { label: 'NH Connectivity', value: 'NH-44 (Bellary Road)' },
    { label: 'Pin Code', value: '560064, Karnataka' },
];

export default function Location() {
    return (
        <section id="location" className="location">
            <div className="container">

                {/* Section Header */}
                <div className="location__header">
                    <span className="section-label">Location Highlights</span>
                    <h2 className="section-title">
                        📍 Strategically <span>Well-Connected</span>
                    </h2>
                    <div className="gold-divider" />
                    <p className="section-subtitle">
                        Nestled on IVC Road, Bengaluru — a prestigious address that connects you to the airport,
                        business hubs, and the finest institutions in North Bengaluru.
                    </p>
                </div>

                {/* Map + Location Details — Side by Side */}
                <div className="location__map-section">
                    {/* Interactive Google Map */}
                    <div className="location__map-img-wrap">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62176.89377058869!2d77.53461842167967!3d13.108600000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22db0f18b7c7%3A0x776d7d5f3b3e3e3e!2sIVC%20Road%2C%20Yelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                            className="location__map-iframe"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Deansgate Location - IVC Road, Bengaluru"
                        />
                    </div>

                    {/* Location Details */}
                    <div className="location__details">
                        <span className="section-label">Project Location</span>
                        <h3 className="location__details-title">IVC Road, Bengaluru</h3>
                        <div className="gold-divider location__details-divider" />
                        <p className="location__details-desc">
                            Deansgate sits at the heart of North Bengaluru's fastest growing residential
                            corridor — IVC Road. Seamless connectivity to the airport, tech parks, and
                            premium lifestyle destinations makes it one of the most sought-after addresses
                            in the city.
                        </p>

                        <div className="location__details-table">
                            {locationDetails.map((item, i) => (
                                <div key={i} className="location__details-row">
                                    <span className="location__details-key">{item.label}</span>
                                    <span className="location__details-val">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://maps.google.com/?q=IVC+Road+Bengaluru+Karnataka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary location__map-cta"
                        >
                            Open in Google Maps
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div className="location__grid">
                    {highlights.map((item, i) => (
                        <div key={i} className="location__card">
                            <div className="location__card-badge">{item.distance}</div>
                            <h3 className="location__card-title">{item.title}</h3>
                            <p className="location__card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

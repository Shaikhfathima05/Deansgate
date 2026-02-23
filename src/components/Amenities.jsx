import React from 'react';
import './Amenities.css';

const amenities = [
    { icon: '🏊', title: 'Swimming Pool', desc: 'Resort-style infinity pool with deck seating' },
    { icon: '🏋️', title: 'Fitness Centre', desc: 'Fully-equipped gymnasium with modern equipment' },
    { icon: '🎭', title: 'Clubhouse', desc: 'Grand clubhouse for events and social gatherings' },
    { icon: '🌳', title: 'Landscaped Gardens', desc: 'Curated green spaces and walking trails' },
    { icon: '🔒', title: '24/7 Security', desc: 'CCTV surveillance and trained security personnel' },
    { icon: '🏃', title: 'Jogging Track', desc: 'Dedicated track through landscaped surroundings' },
    { icon: '👶', title: "Children's Play Area", desc: 'Safe, modern outdoor play equipment for kids' },
    { icon: '🏸', title: 'Sports Courts', desc: 'Badminton, basketball — sport for every age' },
    { icon: '🏡', title: 'Smart Home', desc: 'Integrated home automation features included' },
    { icon: '🅿️', title: 'Covered Parking', desc: 'Two dedicated covered parking slots per unit' },
    { icon: '🌿', title: 'Organic Garden', desc: 'Community organic garden for residents' },
    { icon: '⚡', title: 'EV Charging', desc: 'EV charging points at parking bays' },
];

export default function Amenities() {
    return (
        <section id="amenities" className="amenities">
            <div className="amenities__bg-text" aria-hidden="true">AMENITIES</div>
            <div className="container">
                <div className="amenities__header">
                    <span className="section-label">Lifestyle & Amenities</span>
                    <h2 className="section-title">
                        Every Comfort, <span>Curated</span>
                    </h2>
                    <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Deansgate offers a full suite of world-class amenities to complement your premium lifestyle.
                        Every detail designed for your well-being, comfort, and leisure.
                    </p>
                </div>

                <div className="amenities__grid">
                    {amenities.map((item, i) => (
                        <div key={i} className="amenities__card" style={{ animationDelay: `${i * 0.05}s` }}>
                            <div className="amenities__card-icon">{item.icon}</div>
                            <h3 className="amenities__card-title">{item.title}</h3>
                            <p className="amenities__card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

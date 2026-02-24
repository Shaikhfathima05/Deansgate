import React from 'react';
import './Amenities.css';

const amenities = [
    { title: 'Swimming Pool', desc: 'Resort-style infinity pool with deck seating', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop' },
    { title: 'Fitness Centre', desc: 'Fully-equipped gymnasium with modern equipment', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
    { title: 'Clubhouse', desc: 'Grand clubhouse for events and social gatherings', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop' },
    { title: 'Landscaped Gardens', desc: 'Curated green spaces and walking trails', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
    { title: '24/7 Security', desc: 'CCTV surveillance and trained security personnel', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop' },
    { title: 'Jogging Track', desc: 'Dedicated track through landscaped surroundings', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop' },
    { title: "Children's Play Area", desc: 'Safe, modern outdoor play equipment for kids', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop' },
    { title: 'Sports Courts', desc: 'Badminton, basketball — sport for every age', image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=400&h=300&fit=crop' },
    { title: 'Smart Home', desc: 'Integrated home automation features included', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop' },
    { title: 'Covered Parking', desc: 'Two dedicated covered parking slots per unit', image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop' },
    { title: 'Organic Garden', desc: 'Community organic garden for residents', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop' },
    { title: 'EV Charging', desc: 'EV charging points at parking bays', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop' },
];

export default function Amenities() {
    return (
        <section id="amenities" className="amenities">
            <div className="amenities__bg-text" aria-hidden="true">AMENITIES</div>
            <div className="container">
                <div className="amenities__header">
                    <span className="section-label">Lifestyle & Amenities</span>
                    <h2 className="section-title">
                        ✨ Every Comfort, <span>Curated</span>
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
                            <div className="amenities__card-img-wrap">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="amenities__card-img"
                                />
                            </div>
                            <div className="amenities__card-content">
                                <h3 className="amenities__card-title">{item.title}</h3>
                                <p className="amenities__card-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

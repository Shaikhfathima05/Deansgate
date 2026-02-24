import React, { useState } from 'react';
import './Gallery.css';

const galleryItems = [
    {
        id: 1,
        title: 'Premium Living Space',
        category: 'Interiors',
        image: '/gallery/Screenshot 2026-02-22 204359.png',
        size: 'large',
        blur: true,
    },
    {
        id: 2,
        title: 'Modern Architecture',
        category: 'Exterior',
        image: '/gallery/Screenshot 2026-02-22 204423.png',
        size: 'portrait',
        blur: true,
    },
    {
        id: 3,
        title: 'Serene Environment',
        category: 'Landscape',
        image: '/gallery/Screenshot 2026-02-22 204445.png',
        size: 'normal',
        blur: true,
    },
    {
        id: 4,
        title: 'Luxury Amenities',
        category: 'Amenities',
        image: '/gallery/Screenshot 2026-02-22 204506.png',
        size: 'normal',
    },
    {
        id: 5,
        title: 'Spacious Interiors',
        category: 'Interiors',
        image: '/gallery/Screenshot 2026-02-22 204839.png',
        size: 'wide',
    },
    {
        id: 6,
        title: 'Grand Entrance',
        category: 'Exterior',
        image: '/gallery/Screenshot 2026-02-23 112445.png',
        size: 'large',
    },
    {
        id: 7,
        title: 'Evening View',
        category: 'Exterior',
        image: '/gallery/Screenshot 2026-02-23 112500.png',
        size: 'large',
    },
];

export default function Gallery() {
    const [lightbox, setLightbox] = useState(null);

    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <div className="gallery__header">
                    <span className="section-label">Artistic Impressions</span>
                    <h2 className="section-title">
                        🏡 A Glimpse of <span>Deansgate</span>
                    </h2>
                    <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Artistic impressions of the project. Actual finishes and views may vary.
                    </p>
                </div>

                <div className="gallery__grid">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className={`gallery__item gallery__item--${item.size}`}
                            onClick={() => setLightbox(item)}
                        >
                            <div
                                className="gallery__img"
                                style={{
                                    backgroundImage: `url("${item.image}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    ...(item.blur && { filter: 'blur(4px)' }),
                                }}
                            />
                            <div className="gallery__overlay">
                                <div className="gallery__overlay-content">
                                    <span className="gallery__category">{item.category}</span>
                                    <h3 className="gallery__title">{item.title}</h3>
                                    <span className="gallery__zoom">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                                        </svg>
                                        View
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="gallery__disclaimer">
                    * All images are artistic impressions for illustrative purposes only.
                </p>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
                    <button className="gallery__lightbox-close" onClick={() => setLightbox(null)}>✕</button>
                    <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div
                            className="gallery__lightbox-img"
                            style={{
                                backgroundImage: `url("${lightbox.image}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <div className="gallery__lightbox-info">
                            <span className="gallery__category">{lightbox.category}</span>
                            <h3>{lightbox.title}</h3>
                            <p>Artistic impression — Deansgate, IVC Road, Bengaluru.</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

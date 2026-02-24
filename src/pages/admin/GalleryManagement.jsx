import { useState, useEffect } from 'react';

export default function GalleryManagement() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('galleryImages');
    if (saved) {
      setGalleryImages(JSON.parse(saved));
    }
  }, []);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          id: Date.now() + Math.random(),
          src: event.target.result,
          name: file.name
        };
        setGalleryImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteImage = (id) => {
    setGalleryImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSave = () => {
    localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
    setMessage('Gallery images saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div style={{ maxWidth: '1000px' }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>
          Gallery Management
        </h2>

        {message && (
          <div style={{
            background: '#d1fae5',
            border: '1px solid #a7f3d0',
            color: '#065f46',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}>
            {message}
          </div>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        {galleryImages.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {galleryImages.map((image) => (
              <div key={image.id} style={{
                position: 'relative',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src={image.src}
                  alt={image.name}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px'
                }}>
                  <button
                    onClick={() => deleteImage(image.id)}
                    style={{
                      background: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ×
                  </button>
                </div>
                <div style={{
                  padding: '0.5rem',
                  background: '#f9fafb',
                  fontSize: '0.8rem',
                  color: '#6b7280'
                }}>
                  {image.name}
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handleSave}
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Save Gallery
        </button>
      </div>
    </div>
  );
}
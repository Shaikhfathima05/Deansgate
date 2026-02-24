import { useState, useEffect } from 'react';

export default function HeroManagement() {
  const [formData, setFormData] = useState({
    backgroundImage: '',
    projectTitle: 'DEANSGATE',
    tagline: 'Where Luxury Meets Timeless Living'
  });
  const [imagePreview, setImagePreview] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('heroData');
    if (saved) {
      const data = JSON.parse(saved);
      setFormData(data);
      setImagePreview(data.backgroundImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, backgroundImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('heroData', JSON.stringify(formData));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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
          Hero Section Management
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Background Image Upload */}
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>
              Hero Background Image
            </label>
            <div style={{
              border: '2px dashed #d1d5db',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              background: '#f8fafc'
            }}>
              {imagePreview ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px' 
                    }} 
                  />
                  <button
                    onClick={() => document.getElementById('heroImage').click()}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ fontSize: '3rem', color: '#9ca3af' }}>📷</div>
                  <button
                    onClick={() => document.getElementById('heroImage').click()}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Upload Image
                  </button>
                </div>
              )}
              <input
                id="heroImage"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {/* Project Title */}
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>
              Project Title
            </label>
            <input
              type="text"
              value={formData.projectTitle}
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                fontSize: '1rem'
              }}
              placeholder="Enter project title"
            />
          </div>

          {/* Tagline */}
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>
              Tagline
            </label>
            <textarea
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              rows={3}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              placeholder="Enter tagline"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              color: 'white',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          background: '#10b981',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          zIndex: 1000
        }}>
          ✓ Changes saved successfully!
        </div>
      )}
    </div>
  );
}

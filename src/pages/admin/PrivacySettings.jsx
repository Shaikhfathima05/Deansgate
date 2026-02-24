import { useState, useEffect } from 'react';

export default function PrivacySettings() {
  const [privacyData, setPrivacyData] = useState({
    privacyPolicyUrl: '/privacy-policy',
    content: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('privacySettings');
    if (saved) {
      setPrivacyData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('privacySettings', JSON.stringify(privacyData));
    setMessage('Privacy policy settings saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const openPrivacyPage = () => {
    window.open(privacyData.privacyPolicyUrl, '_blank');
  };

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>
          Privacy Policy Settings
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>
              Privacy Policy URL
            </label>
            <input
              type="text"
              value={privacyData.privacyPolicyUrl}
              onChange={(e) => setPrivacyData({ ...privacyData, privacyPolicyUrl: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px'
              }}
              placeholder="/privacy-policy or https://example.com/privacy"
            />
            <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '0.5rem' }}>
              Enter relative path (e.g., /privacy-policy) or full URL
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>
              Privacy Policy Content (Optional)
            </label>
            <textarea
              value={privacyData.content}
              onChange={(e) => setPrivacyData({ ...privacyData, content: e.target.value })}
              style={{
                width: '100%',
                minHeight: '200px',
                padding: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              placeholder="Enter privacy policy content here (optional - for future use)"
            />
            <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '0.5rem' }}>
              This content is stored for future use. Currently, the privacy page uses static content.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
              Save Settings
            </button>

            <button
              onClick={openPrivacyPage}
              style={{
                background: '#6b7280',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              View Privacy Page
            </button>
          </div>

          <div style={{
            background: '#f8fafc',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Current Settings:</h4>
            <div style={{ fontSize: '0.9rem', color: '#475569' }}>
              Privacy Policy URL: {privacyData.privacyPolicyUrl}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#475569', marginTop: '0.5rem' }}>
              Content Length: {privacyData.content.length} characters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
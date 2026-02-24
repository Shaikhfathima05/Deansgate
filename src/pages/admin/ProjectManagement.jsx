import { useState, useEffect } from 'react';

export default function ProjectManagement() {
  const [projectData, setProjectData] = useState({
    description: '',
    highlights: ['', '', '']
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('projectData');
    if (saved) {
      setProjectData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('projectData', JSON.stringify(projectData));
    setMessage('Project details saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const updateHighlight = (index, value) => {
    const newHighlights = [...projectData.highlights];
    newHighlights[index] = value;
    setProjectData({ ...projectData, highlights: newHighlights });
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
          Project Details Management
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
              Project Description
            </label>
            <textarea
              value={projectData.description}
              onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              placeholder="Enter project description..."
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' }}>
              Key Highlights
            </label>
            {projectData.highlights.map((highlight, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <input
                  type="text"
                  value={highlight}
                  onChange={(e) => updateHighlight(index, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                  placeholder={`Highlight ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleSave}
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              alignSelf: 'flex-start'
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
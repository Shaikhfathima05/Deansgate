import { useState, useEffect } from 'react';

export default function FloorPlanManagement() {
  const [floorPlans, setFloorPlans] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('floorPlans');
    if (saved) {
      setFloorPlans(JSON.parse(saved));
    }
  }, []);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newPlan = {
          id: Date.now() + Math.random(),
          src: event.target.result,
          name: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
          originalName: file.name
        };
        setFloorPlans(prev => [...prev, newPlan]);
      };
      reader.readAsDataURL(file);
    });
  };

  const deletePlan = (id) => {
    setFloorPlans(prev => prev.filter(plan => plan.id !== id));
  };

  const updatePlanName = (id, newName) => {
    setFloorPlans(prev => prev.map(plan => 
      plan.id === id ? { ...plan, name: newName } : plan
    ));
  };

  const handleSave = () => {
    localStorage.setItem('floorPlans', JSON.stringify(floorPlans));
    setMessage('Floor plans saved successfully!');
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
          Floor Plan Management
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
            Upload Floor Plans
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        {floorPlans.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {floorPlans.map((plan) => (
              <div key={plan.id} style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'white'
              }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={plan.src}
                    alt={plan.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <button
                    onClick={() => deletePlan(plan.id)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
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
                <div style={{ padding: '1rem' }}>
                  <input
                    type="text"
                    value={plan.name}
                    onChange={(e) => updatePlanName(plan.id, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontWeight: '600'
                    }}
                    placeholder="Floor plan name"
                  />
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#475569',
                    marginTop: '0.5rem'
                  }}>
                    {plan.originalName}
                  </div>
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
          Save Floor Plans
        </button>
      </div>
    </div>
  );
}
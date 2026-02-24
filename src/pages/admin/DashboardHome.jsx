export default function DashboardHome() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '1rem',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        fontWeight: 'bold', 
        color: '#0f172a',
        marginBottom: '0.5rem'
      }}>
        Welcome to Admin Dashboard
      </h2>
      <p style={{ 
        color: '#475569', 
        fontSize: '1rem',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.5',
        marginBottom: '1.5rem'
      }}>
        Select a section from the sidebar to manage your website content. 
        You can update hero sections, manage gallery images, edit floor plans, and more.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          background: '#f8fafc',
          padding: '1.2rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏠</div>
          <h3 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Hero Section</h3>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Manage main banner content</p>
        </div>
        
        <div style={{
          background: '#f8fafc',
          padding: '1.2rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🖼️</div>
          <h3 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Gallery</h3>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Upload and manage images</p>
        </div>
        
        <div style={{
          background: '#f8fafc',
          padding: '1.2rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📐</div>
          <h3 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Floor Plans</h3>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>Manage floor plan images</p>
        </div>
      </div>
    </div>
  );
}
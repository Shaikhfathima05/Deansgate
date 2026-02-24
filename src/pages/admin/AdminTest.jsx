export default function AdminTest() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#7c3aed',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      textAlign: 'center'
    }}>
      <h1>🎉 ADMIN ROUTING WORKS!</h1>
      <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
        This confirms the admin routes are functioning properly.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/admin/login" 
          style={{ 
            color: 'white', 
            textDecoration: 'underline',
            fontSize: '1rem'
          }}
        >
          Go to Admin Login
        </a>
      </div>
    </div>
  );
}
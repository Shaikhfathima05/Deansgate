import { useState } from 'react';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

export default function AdminDashboard() {
  const { isAuthenticated, logout, loading } = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  console.log('AdminDashboard loaded, isAuthenticated:', isAuthenticated, 'loading:', loading);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'white', fontSize: '1.2rem' }}>Loading admin panel...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login');
    return <Navigate to="/admin/login" replace />;
  }

  const menuItems = [
    { name: 'Hero Section', path: '/admin/dashboard/hero', icon: '🏠' },
    { name: 'Project Details', path: '/admin/dashboard/project', icon: '📋' },
    { name: 'Gallery', path: '/admin/dashboard/gallery', icon: '🖼️' },
    { name: 'Floor Plans', path: '/admin/dashboard/floorplans', icon: '📐' },
    { name: 'WhatsApp Settings', path: '/admin/dashboard/whatsapp', icon: '💬' },
    { name: 'Privacy Policy', path: '/admin/dashboard/privacy', icon: '🔒' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: window.innerWidth <= 768 ? 'column' : 'row' }}>
      {/* Sidebar */}
      <aside style={{
        width: window.innerWidth <= 768 ? '100%' : (sidebarOpen ? '256px' : '80px'),
        height: window.innerWidth <= 768 ? 'auto' : '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        color: 'white',
        transition: 'all 0.3s',
        display: 'flex',
        flexDirection: 'column',
        position: window.innerWidth <= 768 ? 'relative' : 'fixed',
        zIndex: window.innerWidth <= 768 ? 'auto' : 1000
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <h1 style={{ 
            fontWeight: 'bold', 
            fontSize: sidebarOpen ? '1.25rem' : '0.875rem',
            transition: 'all 0.3s',
            margin: 0
          }}>
            {sidebarOpen ? 'Deansgate Admin' : 'DA'}
          </h1>
        </div>

        <nav style={{ 
          flex: 1, 
          padding: '1rem', 
          display: 'flex', 
          flexDirection: window.innerWidth <= 768 ? 'row' : 'column', 
          gap: window.innerWidth <= 768 ? '0.5rem' : '0.5rem', 
          overflowY: 'auto',
          overflowX: window.innerWidth <= 768 ? 'auto' : 'visible',
          flexWrap: window.innerWidth <= 768 ? 'wrap' : 'nowrap'
        }}>
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                width: window.innerWidth <= 768 ? 'auto' : '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: window.innerWidth <= 768 ? '0.5rem 0.8rem' : '0.75rem 1rem',
                borderRadius: '8px',
                transition: 'all 0.2s',
                background: location.pathname === item.path ? '#7c3aed' : 'transparent',
                color: location.pathname === item.path ? 'white' : '#e2e8f0',
                border: 'none',
                cursor: 'pointer',
                fontSize: window.innerWidth <= 768 ? '0.75rem' : '0.875rem',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.25rem' }}>{item.icon}</span>
              {(sidebarOpen || window.innerWidth <= 768) && <span style={{ fontWeight: '500' }}>{item.name}</span>}
            </button>
          ))}
        </nav>

        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              color: '#f87171',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}
          >
            <span style={{ fontSize: '1.25rem' }}>🚪</span>
            {sidebarOpen && <span style={{ fontWeight: '500' }}>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        marginLeft: window.innerWidth <= 768 ? '0' : (sidebarOpen ? '256px' : '80px'),
        transition: 'margin-left 0.3s'
      }}>
        {/* Top Navbar */}
        <header style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: window.innerWidth <= 768 ? '0.8rem 1rem' : '1rem 1.5rem' }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#475569' }}>Welcome, Admin</span>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#7c3aed',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ 
          flex: 1, 
          padding: window.innerWidth <= 768 ? '1rem' : '1rem 1.5rem', 
          overflowY: 'auto' 
        }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuth');
    console.log('AdminProvider: checking auth status:', authStatus);
    setIsAuthenticated(authStatus === 'true');
    setLoading(false);
  }, []);

  const login = (username, password) => {
    console.log('AdminProvider: login attempt:', username);
    // Simple authentication (replace with real auth in production)
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      console.log('AdminProvider: login successful');
      return true;
    }
    console.log('AdminProvider: login failed');
    return false;
  };

  const logout = () => {
    console.log('AdminProvider: logout');
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AdminContext.Provider>
  );
};

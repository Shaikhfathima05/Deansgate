import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Location from './components/Location';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import WhatsAppButton from './components/WhatsAppButton';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import DashboardHome from './pages/admin/DashboardHome';
import HeroManagement from './pages/admin/HeroManagement';
import ProjectManagement from './pages/admin/ProjectManagement';
import GalleryManagement from './pages/admin/GalleryManagement';
import FloorPlanManagement from './pages/admin/FloorPlanManagement';
import WhatsAppSettings from './pages/admin/WhatsAppSettings';
import PrivacySettings from './pages/admin/PrivacySettings';
import AdminTest from './pages/admin/AdminTest';

function HomePage() {
  const location = useLocation();
  
  console.log('HomePage component loaded'); // Debug log

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FloorPlans />
        <Location />
        <Amenities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  console.log('App component loaded'); // Debug log
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/admin/test" element={<AdminTest />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="hero" element={<HeroManagement />} />
        <Route path="project" element={<ProjectManagement />} />
        <Route path="gallery" element={<GalleryManagement />} />
        <Route path="floorplans" element={<FloorPlanManagement />} />
        <Route path="whatsapp" element={<WhatsAppSettings />} />
        <Route path="privacy" element={<PrivacySettings />} />
      </Route>
      <Route path="*" element={<div style={{padding: '2rem', textAlign: 'center'}}><h1>404 - Page Not Found</h1><p>Current path: {window.location.pathname}</p></div>} />
    </Routes>
  );
}

export default App;


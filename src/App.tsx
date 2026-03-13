import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import RFQPage from './pages/RFQPage';
import FactoryDetail from './pages/FactoryDetail';
import ProductionTracker from './pages/ProductionTracker';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/marketplace" element={<Layout><Marketplace /></Layout>} />
        <Route path="/factories/:id" element={<Layout><FactoryDetail /></Layout>} />
        <Route path="/rfqs" element={<Layout><RFQPage /></Layout>} />
        <Route path="/orders/:id" element={<Layout><ProductionTracker /></Layout>} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

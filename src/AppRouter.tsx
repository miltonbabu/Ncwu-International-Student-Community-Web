import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CSTPage from './pages/CSTPage';
import ClassSchedulePage from './pages/ClassSchedulePage';
import EconomicsPage from './pages/EconomicsPage';
import EconomicsSchedulePage from './pages/EconomicsSchedulePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage at root */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<Navigate to="/" replace />} />
        
        {/* CST Section */}
        <Route path="/cst" element={<CSTPage />} />
        <Route path="/cst/class-schedule" element={<ClassSchedulePage />} />
        
        {/* Economics Section */}
        <Route path="/economics-2025" element={<EconomicsPage />} />
        <Route path="/economics-2025/class-schedule" element={<EconomicsSchedulePage />} />
        
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

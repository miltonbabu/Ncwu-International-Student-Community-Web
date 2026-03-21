import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CSTPage from "./pages/CSTPage";
import ClassSchedulePage from "./pages/ClassSchedulePage";
import EconomicsPage from "./pages/EconomicsPage";
import EconomicsSchedulePage from "./pages/EconomicsSchedulePage";
import HSKPage from "./pages/HSKPage";
import StudentGuidesPage from "./pages/StudentGuidesPage";
import EmergencyPage from "./pages/EmergencyPage";
import CampusMapPage from "./pages/CampusMapPage";
import EventsPage from "./pages/EventsPage";
import AppsGuidePage from "./pages/AppsGuidePage";
import TransportationPage from "./pages/TransportationPage";
import PaymentGuidePage from "./pages/PaymentGuidePage";

function AppRouter() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<Navigate to="/" replace />} />

          <Route path="/cst" element={<CSTPage />} />
          <Route path="/cst/class-schedule" element={<ClassSchedulePage />} />

          <Route path="/economics-2025" element={<EconomicsPage />} />
          <Route
            path="/economics-2025/class-schedule"
            element={<EconomicsSchedulePage />}
          />

          <Route path="/hsk" element={<HSKPage />} />

          <Route path="/student-guides" element={<StudentGuidesPage />} />

          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/campus-map" element={<CampusMapPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/apps-guide" element={<AppsGuidePage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/payment-guide" element={<PaymentGuidePage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default AppRouter;

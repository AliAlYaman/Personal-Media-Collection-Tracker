
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MediaListPage from "./pages/MediaListPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import { MediaProvider } from "./context/MediaContext";
import SmartRecommendPage from "./pages/SmartRecommendPage";

export default function App() {
  return (
    <Router>
      <MediaProvider>
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/media" element={<MediaListPage />} />
              <Route path="/recommend" element={<SmartRecommendPage />} />
            </Routes>
          </div>
        </div>
      </MediaProvider>
    </Router>
  );
}

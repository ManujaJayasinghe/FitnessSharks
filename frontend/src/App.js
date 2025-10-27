import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from "./pages/HomePage.jsx";
import ExerciseLibrary from "./pages/ExerciseLibrary.jsx";
import WorkoutPlans from "./pages/WorkoutPlan.jsx";
import AuthPage from "./pages/Login.jsx";
import BlogArticles from "./pages/BlogArticles.jsx";
import Profile from "./pages/Profile.jsx";
import CommunityForum from "./pages/CommunityForum.jsx";
import NutritionGuide from "./pages/NutritionGuide.jsx";
import TermsPage from "./pages/Terms.jsx";
import PrivacyPage from "./pages/Privacy.jsx";
import CookiesPage from "./pages/Cookies.jsx";
import LicensePage from "./pages/License.jsx";

import DayPassPage from "./pages/DayPass.jsx";
import MonthlyPage from "./pages/Monthly.jsx";
import AnnualPage from "./pages/Annual.jsx";
import AboutPage from "./pages/About.jsx";
import CareersPage from "./pages/Careers.jsx";
import ContactPage from "./pages/Contact.jsx";
import PressPage from "./pages/Press.jsx";
import ProgressTracker from "./pages/ProgressTracker.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import TourOurGym from "./pages/TourOurGym.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise-library" element={<ExerciseLibrary />} />
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage defaultMode="signup" />} />
          <Route path="/blog-articles" element={<BlogArticles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/nutrition-guide" element={<NutritionGuide />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/license" element={<LicensePage />} />

          <Route path="/day-pass" element={<DayPassPage />} />
          <Route path="/monthly" element={<MonthlyPage />} />
          <Route path="/annual" element={<AnnualPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/progress-tracker" element={<ProgressTracker />} />
          <Route path="/tour-our-gym" element={<TourOurGym />} />
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
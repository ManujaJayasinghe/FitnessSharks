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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
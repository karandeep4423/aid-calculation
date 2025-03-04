import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import AuthProvider from "./provider/authProvider";
import Simulation from "./pages/simulation/Simulation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Pages from "./pages/Pages";
import VerifyMail from "./pages/VerifyMail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./pages/Admin";
function AppContent() {
  const location = useLocation();

  // List of paths where Navbar and Footer should be hidden
  const hideNavbarAndFooterPaths = ["/login", "/register", "/simulation"];

  // Check if the current path matches one of the paths where Navbar and Footer should be hidden
  const hideNavbarAndFooter = hideNavbarAndFooterPaths.includes(
    location.pathname
  );
  const user = JSON.parse(localStorage.getItem("userDetails"));
  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarAndFooter && <Navbar />}
      <ToastContainer autoClose={false} />
      {/* Main content */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/:param" element={<Pages />} />
        <Route path="/verify-email/:token" element={<VerifyMail />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
        {/* Route for dashboard: if the user is admin, redirect to /admin */}
        <Route
          path="/dashboard"
          element={
            user?.role === "admin" ? (
              <Navigate to="/admin" replace />
            ) : (
              <Dashboard />
            )
          }
        />
        {/* Route for admin: if the user is NOT an admin, redirect to /dashboard */}
        <Route
          path="/admin"
          element={
            user?.role !== "admin" ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Admin />
            )
          }
        />
      </Route>
      </Routes>

      {/* Conditionally render Footer */}
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;

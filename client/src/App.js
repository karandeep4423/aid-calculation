import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AuthProvider from './provider/authProvider';
import Simulation from './pages/simulation/Simulation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About  from './pages/About';
import ForgotPassword from './pages/auth/ForgotPassword';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={< Home />} />
        <Route path='/simulation' element={<Simulation/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='about-us' element={<About/>} />
        <Route path="forgot-password" element={<ForgotPassword/>}/>
      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;

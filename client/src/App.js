import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AuthProvider from './provider/authProvider';
import Simulation from './pages/simulation/Simulation';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={< Home />} />
        <Route path='/simulation' element={<Simulation/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;

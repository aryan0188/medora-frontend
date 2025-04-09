import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import SideEffects from './pages/SideEffects';
import Remedies from './pages/Remedies';
import MediBot from './pages/MediBot';
import NearbyLocator from './pages/NearbyLocator';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sideeffects" element={<SideEffects />} />
        <Route path="/remedies" element={<Remedies />} />
        <Route path="/medibot" element={<MediBot />} />
        <Route path="/nearby" element={<NearbyLocator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

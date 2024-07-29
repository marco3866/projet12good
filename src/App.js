// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound'; // Importer le composant NotFound
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<NotFound />} /> {/* Route 404 */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
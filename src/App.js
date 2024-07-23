import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './pages/Profile/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/profile/:id" element={<Profile />} />
            {/* autres routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

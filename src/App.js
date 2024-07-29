// Importation des bibliothèques et composants nécessaires
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './App.css'; // Importation du fichier CSS pour les styles globaux de l'application

// Définition du composant fonctionnel App
const App = () => {
  return (
    // Utilisation du Router pour la gestion des routes
    <Router>
      <div className="app">
        <Header /> {/* Inclusion du composant Header */}
        <Sidebar /> {/* Inclusion du composant Sidebar */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
            <Route path="/profile/:id" element={<Profile />} /> {/* Route pour la page de profil avec paramètre d'identifiant */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default App;

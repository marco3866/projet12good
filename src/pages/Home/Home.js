import React from 'react';
import { Link } from 'react-router-dom';
import './Home.sass';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenue sur SportSee</h1>
      <p>
        Formatio de développeur front-end d'OpenClassRoom Projet 12. Cette démo présente le tableau de bord d'un utilisateur de SportSee, une startup de coaching sportif. Accédez au tableau de bord en choisissant un utilisateur ci-dessous :
      </p>
      <div className="user-links">
        <Link to="/profile/12">ID 12</Link>
        <Link to="/profile/18">ID 18</Link>
      </div>
    </div>
  );
};

export default Home;

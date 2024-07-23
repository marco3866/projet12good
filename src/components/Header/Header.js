import React from 'react';
import './Header.sass';
import headerLogo from '../../assets/images/headerLogo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-container">
        <div className="header-logo-background">
          <img src={headerLogo} alt="SportSee Logo" className="header-logo" />
        </div>
        <span className="header-logo-text">SportSee</span>
      </div>
      <nav className="header-nav">
        <a href="/">Accueil</a>
        <a href="/profile">Profil</a>
        <a href="/settings">Réglage</a>
        <a href="/community">Communauté</a>
      </nav>
    </header>
  );
};

export default Header;

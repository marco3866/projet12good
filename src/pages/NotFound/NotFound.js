// src/pages/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.sass';

const NotFound = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;

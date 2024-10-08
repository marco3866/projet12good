import React from 'react';
import PropTypes from 'prop-types';
import './KeyInfoCard.sass'; // Importation du fichier SASS pour les styles spécifiques au composant

// Définition du composant fonctionnel KeyInfoCard
const KeyInfoCard = ({ icon, value, label, backgroundColor }) => {
  return (
    // Conteneur principal de la carte d'information clé
    <div className="key-info-card">
      {/* Conteneur de l'icône avec le fond coloré */}
      <div className="key-info-icon-container" style={{ backgroundColor }}> {/* Appliquer le fond dynamique */}
        <img src={icon} alt={label} className="key-info-icon" />
      </div>
      {/* Conteneur des valeurs et labels */}
      <div>
        <p className="key-info-value">{value}</p> {/* Valeur de l'information clé */}
        <p className="key-info-label">{label}</p> {/* Label de l'information clé */}
      </div>
    </div>
  );
};

// Définition des types de props pour le composant
KeyInfoCard.propTypes = {
  icon: PropTypes.string.isRequired, // L'icône doit être une chaîne de caractères (URL)
  value: PropTypes.string.isRequired, // La valeur doit être une chaîne de caractères
  label: PropTypes.string.isRequired, // Le label doit être une chaîne de caractères
  backgroundColor: PropTypes.string.isRequired, // La couleur de fond dynamique
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default KeyInfoCard;

// Importation des bibliothèques React et PropTypes nécessaires
import React from 'react';
import PropTypes from 'prop-types';
import './CustomTooltip.css'; // Importation du fichier CSS pour les styles spécifiques au composant

// Définition du composant fonctionnel CustomTooltip
const CustomTooltip = ({ active, payload }) => {
  // Si le tooltip est actif et qu'il y a des données à afficher
  if (active && payload && payload.length) {
    return (
      // Conteneur principal du tooltip avec des styles personnalisés
      <div className="custom-tooltip">
        {/* Affichage du poids */}
        <p className="label">{`Poids : ${payload[0].value} kg`}</p>
        {/* Affichage des calories brûlées */}
        <p className="label">{`Calories brûlées : ${payload[1].value} kCal`}</p>
      </div>
    );
  }

  // Si le tooltip n'est pas actif ou qu'il n'y a pas de données, ne rien afficher
  return null;
};

// Définition des types de props pour le composant
CustomTooltip.propTypes = {
  active: PropTypes.bool, // Le prop 'active' doit être un booléen
  payload: PropTypes.array, // Le prop 'payload' doit être un tableau
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default CustomTooltip;

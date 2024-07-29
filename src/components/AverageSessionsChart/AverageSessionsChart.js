// Importation des bibliothèques React et Recharts nécessaires
import React, { useState, useRef } from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip'; // Importation du composant CustomTooltip
import './AverageSessionsChart.sass'; // Importation du fichier SASS pour les styles spécifiques au composant

// Définition du composant fonctionnel AverageSessionsChart
const AverageSessionsChart = ({ data }) => {
  // Déclaration des états locaux pour l'index de l'infobulle et la référence à l'overlay
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const overlayRef = useRef(null);

  // Transformation des données pour utiliser les jours de la semaine
  const transformedData = data.map((item, index) => ({
    ...item,
    day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][index] // Conversion des index en jours de la semaine
  }));

  // Fonction de gestion du déplacement de la souris sur le graphique
  const handleMouseMove = (e) => {
    if (e.isTooltipActive) {
      const index = e.activeTooltipIndex;
      setTooltipIndex(index);
  
      // Calcul du pourcentage de gauche et ajustement pour les marges
      const leftPercentage = ((index + 1) / (transformedData.length + 1)) * 100;
      const adjustedLeftPercentage = Math.max(0, Math.min(leftPercentage, 98)); // Ajustement de la marge à gauche et à droite
      overlayRef.current.style.left = `${adjustedLeftPercentage}%`;
      overlayRef.current.style.width = `${100 - adjustedLeftPercentage}%`;
    }
  };
  
  // Fonction de gestion de la sortie de la souris du graphique
  const handleMouseLeave = () => {
    setTooltipIndex(null);
    overlayRef.current.style.width = '0%';
  };

  return (
    // Conteneur principal du graphique
    <div className="AverageSessionsChart">
      <div className="chart-header">
        <h2>Durée moyenne des sessions</h2> {/* Titre du graphique */}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={transformedData} // Données transformées passées au graphique
          margin={{
            top: 20, right: 30, left: 20, bottom: 50,
          }}
          onMouseMove={handleMouseMove} // Définition de la fonction à appeler lors du déplacement de la souris
          onMouseLeave={handleMouseLeave} // Définition de la fonction à appeler lors de la sortie de la souris
        >
          <XAxis dataKey="day" tick={{ fill: '#fff' }} /> {/* Axe X basé sur les jours de la semaine */}
          <Tooltip content={<CustomTooltip />} /> {/* Utilisation du composant CustomTooltip pour les infobulles */}
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={5} dot={{ r: 0, fill: '#fff', strokeWidth: 5 }} activeDot={{ r: 5, fill: '#fff' }} /> {/* Ligne du graphique */}
        </LineChart>
      </ResponsiveContainer>
      <div ref={overlayRef} className="overlay"></div> {/* Overlay pour l'effet d'ombrage */}
    </div>
  );
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default AverageSessionsChart;

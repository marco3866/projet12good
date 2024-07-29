// Importation de React et des composants Recharts nécessaires pour le graphique en secteur
import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './ScoreChart.sass'; // Importation du fichier SASS pour les styles spécifiques au composant

// Définition du composant fonctionnel ScoreChart
const ScoreChart = ({ score }) => {
  // Calculer le pourcentage en utilisant todayScore ou score
  const percentage = (score.todayScore || score.score) * 100;

  // Préparer les données pour le graphique en secteur
  const data = [
    { value: percentage },
    { value: 100 - percentage },
  ];

  return (
    // Conteneur principal du graphique de score
    <div className="score-chart">
      <h2>Score</h2> {/* Titre du graphique */}
      <div className="pie-chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data} // Données pour le graphique en secteur
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={450}
              paddingAngle={5}
              dataKey="value"
            >
              <Cell key="score" fill="#ff0000" cornerRadius={10} /> {/* Cellule rouge pour le score */}
              <Cell key="rest" fill="#fbfbfb" /> {/* Cellule grise pour le reste */}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="score-info">
          <span className="score-percentage">{percentage}%</span> {/* Afficher le pourcentage */}
          <span className="score-label">de votre objectif</span> {/* Libellé du pourcentage */}
        </div>
      </div>
    </div>
  );
};

// Définition des propTypes pour s'assurer que les props sont valides
ScoreChart.propTypes = {
  score: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      todayScore: PropTypes.number,
      score: PropTypes.number,
    })
  ]).isRequired,
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default ScoreChart;

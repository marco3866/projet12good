// Importation des bibliothèques React et Recharts nécessaires
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip'; // Importation du composant CustomTooltip
import './ActivityChart.css'; // Importation du fichier CSS pour les styles spécifiques au composant

// Définition du composant fonctionnel ActivityChart
const ActivityChart = ({ data }) => {
  // Transformation des données pour utiliser des numéros de jour
  const transformedData = data.map((item, index) => ({
    ...item,
    day: index + 1 // Ajout d'un champ 'day' qui numérote les jours à partir de 1
  }));

  // Calcul des valeurs minimales et maximales pour les axes
  const minCal = Math.min(...transformedData.map(item => item.calories)) - 10; // Minimum des calories avec une marge de 10 en moins
  const maxCal = Math.max(...transformedData.map(item => item.calories)) + 10; // Maximum des calories avec une marge de 10 en plus
  const minKg = Math.min(...transformedData.map(item => item.kilogram)) - 1; // Minimum des kilogrammes avec une marge de 1 en moins
  const maxKg = Math.max(...transformedData.map(item => item.kilogram)) + 1; // Maximum des kilogrammes avec une marge de 1 en plus

  return (
    // Conteneur principal du graphique
    <div className="ActivityChart">
      <div className="chart-header">
        <h2>Activité quotidienne</h2> {/* Titre du graphique */}
        <div className="legend"> {/* Légende du graphique */}
          <span className="legend-item">
            <span className="legend-color black"></span> Poids (kg)
          </span>
          <span className="legend-item">
            <span className="legend-color red"></span> Calories brûlées (kCal)
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={transformedData} // Données transformées passées au graphique
          margin={{
            top: 20, right: 30, left: 0, bottom: 5,
          }}
          barSize={10} // Taille des barres
        >
          <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" /> {/* Grille du graphique */}
          <XAxis dataKey="day" /> {/* Axe X basé sur le numéro de jour */}
          <YAxis yAxisId="left" orientation="left" domain={[minCal, maxCal]} hide={true} /> {/* Axe Y gauche pour les calories */}
          <YAxis yAxisId="right" orientation="right" domain={[minKg, maxKg]} tickLine={false} axisLine={false} /> {/* Axe Y droit pour les kilogrammes */}
          <Tooltip content={<CustomTooltip />} /> {/* Utilisation du composant CustomTooltip pour les infobulles */}
          <Bar yAxisId="right" dataKey="kilogram" fill="#000" radius={[10, 10, 0, 0]} /> {/* Barres pour les kilogrammes */}
          <Bar yAxisId="left" dataKey="calories" fill="#ff0000" radius={[10, 10, 0, 0]} /> {/* Barres pour les calories */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default ActivityChart;

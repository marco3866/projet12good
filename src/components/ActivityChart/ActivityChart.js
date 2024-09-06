import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip'; // Importation du composant CustomTooltip
import './ActivityChart.css'; // Importation du fichier CSS pour les styles spécifiques au composant

const ActivityChart = ({ data }) => {
  const transformedData = data.map((item, index) => ({
    ...item,
    day: index + 1
  }));

  const minCal = Math.min(...transformedData.map(item => item.calories)) - 10;
  const maxCal = Math.max(...transformedData.map(item => item.calories)) + 10;
  const minKg = Math.min(...transformedData.map(item => item.kilogram)) - 1;
  const maxKg = Math.max(...transformedData.map(item => item.kilogram)) + 1;

  return (
    <div className="ActivityChart">
      <div className="chart-header">
        <h2>Activité quotidienne</h2>
        <div className="legend">
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
          data={transformedData}
          margin={{
            top: 20, right: 30, left: 0, bottom: 5,
          }}
          barSize={10}
        >
          {/* Ajout des lignes horizontales avec style pointillé */}
          <CartesianGrid 
            strokeDasharray="3 3"  // Lignes en pointillés
            vertical={false}        // Pas de lignes verticales
            stroke="#ccc"           // Couleur des lignes horizontales
          />
          
          {/* Axe X avec une ligne continue */}
          <XAxis 
            dataKey="day" 
            tickLine={false} 
            axisLine={{ stroke: '#000', strokeWidth: 2 }}  // Ligne continue noire pour l'axe X
          />
          
          {/* Axes Y pour les calories et kilogrammes */}
          <YAxis 
            yAxisId="left" 
            orientation="left" 
            domain={[minCal, maxCal]} 
            hide={true}  // Cacher l'axe des calories
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            domain={[minKg, maxKg]} 
            tickLine={false} 
            axisLine={false} 
          />

          {/* Tooltip pour afficher les valeurs */}
          <Tooltip content={<CustomTooltip />} />

          {/* Barres pour le poids en kilogrammes */}
          <Bar yAxisId="right" dataKey="kilogram" fill="#000" radius={[10, 10, 0, 0]} />
          
          {/* Barres pour les calories brûlées */}
          <Bar yAxisId="left" dataKey="calories" fill="#ff0000" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;

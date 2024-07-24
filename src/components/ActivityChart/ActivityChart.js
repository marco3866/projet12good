// src/components/ActivityChart/ActivityChart.js
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip'; // Update the import path if necessary
import './ActivityChart.css';

const ActivityChart = ({ data }) => {
  // Transformer les données pour utiliser des numéros de jour
  const transformedData = data.map((item, index) => ({
    ...item,
    day: index + 1 // Numérotation des jours à partir de 1
  }));

  // Calculez les valeurs minimales et maximales pour les axes
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
          <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" domain={[minCal, maxCal]} hide={true} />
          <YAxis yAxisId="right" orientation="right" domain={[minKg, maxKg]} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} /> {/* Use the CustomTooltip component */}
          <Bar yAxisId="right" dataKey="kilogram" fill="#000" radius={[10, 10, 0, 0]} />
          <Bar yAxisId="left" dataKey="calories" fill="#ff0000" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;

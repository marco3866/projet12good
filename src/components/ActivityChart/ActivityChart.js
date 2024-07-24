import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './ActivityChart.css';

const data = [
  {
    name: '1', poids: 80, calories: 240,
  },
  {
    name: '2', poids: 80, calories: 220,
  },
  {
    name: '3', poids: 81, calories: 280,
  },
  {
    name: '4', poids: 81, calories: 290,
  },
  {
    name: '5', poids: 80, calories: 160,
  },
  {
    name: '6', poids: 78, calories: 162,
  },
  {
    name: '7', poids: 76, calories: 390,
  },
];

const ActivityChart = () => (
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
        data={data}
        margin={{
          top: 20, right: 30, left: 0, bottom: 5,
        }}
        barSize={10} // Ajustez cette valeur pour affiner les barres
      >
        <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="poids" fill="#000" />
        <Bar dataKey="calories" fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;

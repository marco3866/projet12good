import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './ActivityChart.css';

const ActivityChart = ({ data }) => (
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
        <CartesianGrid vertical={true} horizontal={false} strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="kilogram" fill="#000" />
        <Bar dataKey="calories" fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;

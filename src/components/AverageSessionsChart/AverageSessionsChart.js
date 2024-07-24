// src/components/AverageSessionsChart/AverageSessionsChart.js
import React from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import './AverageSessionsChart.sass';

const AverageSessionsChart = ({ data }) => {
  // Transformer les données pour utiliser les jours de la semaine
  const transformedData = data.map((item, index) => ({
    ...item,
    day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]
  }));

  return (
    <div className="AverageSessionsChart">
      <div className="chart-header">
        <h2>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={transformedData}
          margin={{
            top: 20, right: 30, left: 0, bottom: 50,
          }}
        >
          <XAxis dataKey="day" tick={{ fill: '#fff', fontSize: 14 }} tickMargin={10} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;

import React, { useState, useRef } from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import './AverageSessionsChart.sass';

const AverageSessionsChart = ({ data }) => {
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const overlayRef = useRef(null);

  // Transformer les données pour utiliser les jours de la semaine
  const transformedData = data.map((item, index) => ({
    ...item,
    day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]
  }));

  const handleMouseMove = (e) => {
    if (e.isTooltipActive) {
      const index = e.activeTooltipIndex;
      setTooltipIndex(index);
  
      const leftPercentage = ((index + 1) / (transformedData.length + 1)) * 100;
      const adjustedLeftPercentage = Math.max(0, Math.min(leftPercentage, 98)); // Ajustez la marge à gauche et à droite
      overlayRef.current.style.left = `${adjustedLeftPercentage}%`;
      overlayRef.current.style.width = `${100 - adjustedLeftPercentage}%`;
    }
  };
  
  
  const handleMouseLeave = () => {
    setTooltipIndex(null);
    overlayRef.current.style.width = '0%';
  };

  return (
    <div className="AverageSessionsChart">
      <div className="chart-header">
        <h2>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={transformedData}
          margin={{
            top: 20, right: 30, left: 20, bottom: 50,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <XAxis dataKey="day" tick={{ fill: '#fff' }} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={5} dot={{ r: 0, fill: '#fff', strokeWidth: 5 }} activeDot={{ r: 5, fill: '#fff' }} />
        </LineChart>
      </ResponsiveContainer>
      <div ref={overlayRef} className="overlay"></div>
    </div>
  );
};

export default AverageSessionsChart;

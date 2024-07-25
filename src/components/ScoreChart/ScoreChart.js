import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './ScoreChart.sass';

const ScoreChart = ({ score }) => {
  const percentage = (score.todayScore || score.score) * 100; // Utilisez todayScore ou score

  const data = [
    { value: percentage },
    { value: 100 - percentage },
  ];

  return (
    <div className="score-chart">
      <h2>Score</h2>
      <div className="pie-chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={450}
              paddingAngle={5}
              dataKey="value"
            >
              <Cell key="score" fill="#ff0000" cornerRadius={10} />
              <Cell key="rest" fill="#fbfbfb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="score-info">
          <span className="score-percentage">{percentage}%</span>
          <span className="score-label">de votre objectif</span>
        </div>
      </div>
    </div>
  );
};

ScoreChart.propTypes = {
  score: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      todayScore: PropTypes.number,
      score: PropTypes.number,
    })
  ]).isRequired,
};

export default ScoreChart;
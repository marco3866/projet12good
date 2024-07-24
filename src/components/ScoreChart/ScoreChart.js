import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';
import './ScoreChart.sass';

const ScoreChart = ({ score }) => {
  const data = [
    { value: score },
    { value: 100 - score },
  ];

  return (
    <div className="score-chart">
      <h2>Score</h2>
      <PieChart width={200} height={200}>
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
      <div className="score-info">
        <span className="score-percentage">{score}%</span>
        <span className="score-label">de votre objectif</span>
      </div>
    </div>
  );
};

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;

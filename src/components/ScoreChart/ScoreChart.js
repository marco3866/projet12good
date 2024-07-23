// src/components/ScoreChart/ScoreChart.js
import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import './ScoreChart.sass';

const ScoreChart = ({ score }) => {
    const data = [
        {
            name: 'Score',
            value: score,
            fill: '#8884d8'
        },
        {
            name: 'Remainder',
            value: 1 - score,
            fill: '#e0e0e0'
        }
    ];

    return (
        <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data}
        >
            <RadialBar
                minAngle={15}
                clockWise
                dataKey="value"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
        </RadialBarChart>
    );
};

export default ScoreChart;

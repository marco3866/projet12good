// src/components/PerformanceChart/PerformanceChart.js
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import './PerformanceChart.sass';

const PerformanceChart = ({ data, kind }) => {
    const formattedData = data.map(item => ({
        ...item,
        kind: kind[item.kind]
    }));
    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={formattedData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    );
};

export default PerformanceChart;

// src/components/AverageSessionsChart/AverageSessionsChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './AverageSessionsChart.sass';

const AverageSessionsChart = ({ data }) => {
    return (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
        </LineChart>
    );
};

export default AverageSessionsChart;

// src/components/PerformanceChart/PerformanceChart.js
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import CustomTooltip from './CustomTooltip';
import './PerformanceChart.sass';

const PerformanceChart = ({ data, kind }) => {
    const kindMapping = {
        intensity: 'Intensité',
        speed: 'Vitesse',
        strength: 'Force',
        endurance: 'Endurance',
        energy: 'Énergie',
        cardio: 'Cardio'
    };

    const formattedData = data.map(item => ({
        ...item,
        kind: kindMapping[kind[item.kind]]
    })).sort((a, b) => {
        const order = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Énergie', 'Cardio'];
        return order.indexOf(a.kind) - order.indexOf(b.kind);
    });

    return (
        <div className="PerformanceChart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
                    <PolarGrid stroke="#fff" />
                    <PolarAngleAxis dataKey="kind" stroke="#fff" />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                    <Radar name="Performance" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChart;

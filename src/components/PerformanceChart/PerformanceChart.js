// Importation de React et des composants Recharts nécessaires pour le graphique Radar
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import CustomTooltip from './CustomTooltip'; // Importation du composant CustomTooltip pour les infobulles personnalisées
import './PerformanceChart.sass'; // Importation du fichier SASS pour les styles spécifiques au composant

// Définition du composant fonctionnel PerformanceChart
const PerformanceChart = ({ data, kind }) => {
    // Mappage des types de performance en français
    const kindMapping = {
        intensity: 'Intensité',
        speed: 'Vitesse',
        strength: 'Force',
        endurance: 'Endurance',
        energy: 'Énergie',
        cardio: 'Cardio'
    };

    // Formattage des données pour correspondre aux types en français et tri par ordre spécifique
    const formattedData = data.map(item => ({
        ...item,
        kind: kindMapping[kind[item.kind]]
    })).sort((a, b) => {
        const order = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Énergie', 'Cardio'];
        return order.indexOf(a.kind) - order.indexOf(b.kind);
    });

    return (
        // Conteneur principal du graphique de performance
        <div className="PerformanceChart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
                    <PolarGrid stroke="#fff" /> {/* Grille polaire */}
                    <PolarAngleAxis dataKey="kind" stroke="#fff" /> {/* Axe des angles basé sur les types de performance */}
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} /> {/* Utilisation du composant CustomTooltip */}
                    <Radar name="Performance" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} /> {/* Définition du radar */}
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default PerformanceChart;

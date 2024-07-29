// Importation des bibliothèques et composants nécessaires
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/api';
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import AverageSessionsChart from '../../components/AverageSessionsChart/AverageSessionsChart';
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart';
import ScoreChart from '../../components/ScoreChart/ScoreChart';
import KeyInfoCard from '../../components/KeyInfoCard/KeyInfoCard';
import caloriesIcon from '../../assets/images/fire.svg';
import proteinIcon from '../../assets/images/chicken.svg';
import carbsIcon from '../../assets/images/apple.svg';
import lipidsIcon from '../../assets/images/burger.svg';
import './Profile.sass'; // Importation des styles spécifiques au composant

// Définition du composant fonctionnel Profile
const Profile = () => {
    const { id } = useParams(); // Récupération de l'identifiant utilisateur depuis l'URL
    const [userData, setUserData] = useState(null); // État pour les données utilisateur
    const [activityData, setActivityData] = useState(null); // État pour les données d'activité
    const [averageSessionsData, setAverageSessionsData] = useState(null); // État pour les sessions moyennes
    const [performanceData, setPerformanceData] = useState(null); // État pour les données de performance

    // Utilisation de useEffect pour récupérer les données utilisateur et mettre à jour les états
    useEffect(() => {
        getUserData(id).then(data => setUserData(data)); // Récupération des données utilisateur
        getUserActivity(id).then(data => setActivityData(data.sessions)); // Récupération des données d'activité
        getUserAverageSessions(id).then(data => setAverageSessionsData(data.sessions)); // Récupération des sessions moyennes
        getUserPerformance(id).then(data => setPerformanceData(data)); // Récupération des données de performance
    }, [id]); // Exécution du useEffect à chaque changement d'identifiant utilisateur

    // Affichage d'un message de chargement si les données ne sont pas encore disponibles
    if (!userData || !activityData || !averageSessionsData || !performanceData) return <div>Loading...</div>;

    return (
        // Conteneur principal du composant Profile
        <div className="profile">
            <h1>Bonjour <span className="highlight">{userData.userInfos.firstName}</span></h1> {/* Affichage du nom de l'utilisateur */}
            <p>Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="celebration">🎉</span></p> {/* Message de félicitations */}
            <div className="dashboard">
                <div className="charts">
                    <ActivityChart data={activityData} /> {/* Graphique d'activité quotidienne */}
                    <div className="small-charts">
                        <AverageSessionsChart data={averageSessionsData} /> {/* Graphique des sessions moyennes */}
                        <PerformanceChart data={performanceData.data} kind={performanceData.kind} /> {/* Graphique de performance */}
                        <ScoreChart score={userData} /> {/* Graphique de score utilisateur */}
                    </div>
                </div>
                <div className="key-info">
                    <KeyInfoCard icon={caloriesIcon} value={`${userData.keyData.calorieCount}kCal`} label="Calories" /> {/* Carte d'information sur les calories */}
                    <KeyInfoCard icon={proteinIcon} value={`${userData.keyData.proteinCount}g`} label="Proteins" /> {/* Carte d'information sur les protéines */}
                    <KeyInfoCard icon={carbsIcon} value={`${userData.keyData.carbohydrateCount}g`} label="Carbohydrates" /> {/* Carte d'information sur les glucides */}
                    <KeyInfoCard icon={lipidsIcon} value={`${userData.keyData.lipidCount}g`} label="Lipids" /> {/* Carte d'information sur les lipides */}
                </div>
            </div>
        </div>
    );
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default Profile;

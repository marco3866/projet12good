import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import './Profile.sass';

const Profile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [averageSessionsData, setAverageSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await getUserData(id);
                if (!userResponse.data) {
                    setError(true);
                    return;
                }
                setUserData(userResponse.data);

                const activityResponse = await getUserActivity(id);
                setActivityData(activityResponse.data.sessions);

                const averageSessionsResponse = await getUserAverageSessions(id);
                setAverageSessionsData(averageSessionsResponse.data.sessions);

                const performanceResponse = await getUserPerformance(id);
                setPerformanceData(performanceResponse.data);
            } catch (error) {
                setError(true);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (error) {
            navigate('/404');
        }
    }, [error, navigate]);

    if (!userData || !activityData || !averageSessionsData || !performanceData) return <div>Loading...</div>;

    return (
        <div className="profile">
            <div className="welcome-section"> {/* Section alignée à gauche pour le texte de bienvenue */}
                <h1>Bonjour <span className="highlight">{userData.userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="celebration">🎉</span></p>
            </div>
            <div className="dashboard">
                <div className="charts">
                    <ActivityChart data={activityData} />
                    <div className="small-charts">
                        <AverageSessionsChart data={averageSessionsData} />
                        <PerformanceChart data={performanceData.data} kind={performanceData.kind} />
                        <ScoreChart score={userData} />
                    </div>
                </div>
                <div className="key-info">
                    <KeyInfoCard 
                      icon={caloriesIcon} 
                      value={`${userData.keyData.calorieCount}kCal`} 
                      label="Calories" 
                      backgroundColor="#ffebeb" // Couleur pour Calories
                    />
                    <KeyInfoCard 
                      icon={proteinIcon} 
                      value={`${userData.keyData.proteinCount}g`} 
                      label="Proteins" 
                      backgroundColor="#e0f7ff" // Couleur pour Proteins
                    />
                    <KeyInfoCard 
                      icon={carbsIcon} 
                      value={`${userData.keyData.carbohydrateCount}g`} 
                      label="Carbohydrates" 
                      backgroundColor="#fff5e0" // Couleur pour Carbohydrates
                    />
                    <KeyInfoCard 
                      icon={lipidsIcon} 
                      value={`${userData.keyData.lipidCount}g`} 
                      label="Lipids" 
                      backgroundColor="#ffe0e5" // Couleur pour Lipids
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;

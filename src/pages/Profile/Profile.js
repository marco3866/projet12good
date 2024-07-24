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
import './Profile.sass';

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [averageSessionsData, setAverageSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);

    useEffect(() => {
        getUserData(id).then(data => setUserData(data));
        getUserActivity(id).then(data => setActivityData(data.sessions));
        getUserAverageSessions(id).then(data => setAverageSessionsData(data.sessions));
        getUserPerformance(id).then(data => setPerformanceData(data));
    }, [id]);

    if (!userData || !activityData || !averageSessionsData || !performanceData) return <div>Loading...</div>;

    return (
        <div className="profile">
            <h1>Bonjour <span className="highlight">{userData.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="celebration">🎉</span></p>
            <div className="dashboard">
                <div className="charts">
                    <ActivityChart data={activityData} />
                    <div className="small-charts">
                        <AverageSessionsChart data={averageSessionsData} />
                        <PerformanceChart data={performanceData.data} kind={performanceData.kind} />
                        <ScoreChart score={userData.todayScore} />
                    </div>
                </div>
                <div className="key-info">
                    <KeyInfoCard icon={caloriesIcon} value={`${userData.keyData.calorieCount}kCal`} label="Calories" />
                    <KeyInfoCard icon={proteinIcon} value={`${userData.keyData.proteinCount}g`} label="Proteins" />
                    <KeyInfoCard icon={carbsIcon} value={`${userData.keyData.carbohydrateCount}g`} label="Carbohydrates" />
                    <KeyInfoCard icon={lipidsIcon} value={`${userData.keyData.lipidCount}g`} label="Lipids" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
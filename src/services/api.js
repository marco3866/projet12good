import axios from 'axios';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data';

export const getUserData = async (id) => {
    return USER_MAIN_DATA.find(user => user.id === parseInt(id));
};

export const getUserActivity = async (id) => {
    return USER_ACTIVITY.find(activity => activity.userId === parseInt(id));
};

export const getUserAverageSessions = async (id) => {
    return USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(id));
};

export const getUserPerformance = async (id) => {
    return USER_PERFORMANCE.find(performance => performance.userId === parseInt(id));
};

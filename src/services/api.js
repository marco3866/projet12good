import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Assurez-vous que c'est le bon port du backend

export const getUserData = async (id) => {
    const response = await axios.get(`${BASE_URL}/user/${id}`);
    return response.data;
};

export const getUserActivity = async (id) => {
    const response = await axios.get(`${BASE_URL}/user/${id}/activity`);
    return response.data;
};

export const getUserAverageSessions = async (id) => {
    const response = await axios.get(`${BASE_URL}/user/${id}/average-sessions`);
    return response.data;
};

export const getUserPerformance = async (id) => {
    const response = await axios.get(`${BASE_URL}/user/${id}/performance`);
    return response.data;
};

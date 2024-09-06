import axios from 'axios'; // Importation de la bibliothèque axios pour effectuer des appels HTTP

// Définition de l'URL de base pour les appels API
const BASE_URL = 'http://localhost:3000'; // Assurez-vous que c'est le bon port du backend

/**
 * Fonction pour récupérer les données de l'utilisateur via l'API
 * @param {number} id - L'identifiant de l'utilisateur
 * @returns {Object} - Les données de l'utilisateur
 */
export const getUserData = async (id) => {
    // Requête HTTP GET pour récupérer les informations de l'utilisateur via l'API
    const response = await axios.get(`${BASE_URL}/user/${id}`);
    return response.data; // Retourne les données de la réponse
};

/**
 * Fonction pour récupérer l'activité de l'utilisateur via l'API
 * @param {number} id - L'identifiant de l'utilisateur
 * @returns {Object} - Les données d'activité de l'utilisateur
 */
export const getUserActivity = async (id) => {
    // Requête HTTP GET pour récupérer les données d'activité de l'utilisateur
    const response = await axios.get(`${BASE_URL}/user/${id}/activity`);
    return response.data; // Retourne les données de la réponse
};

/**
 * Fonction pour récupérer les sessions moyennes de l'utilisateur via l'API
 * @param {number} id - L'identifiant de l'utilisateur
 * @returns {Object} - Les données des sessions moyennes de l'utilisateur
 */
export const getUserAverageSessions = async (id) => {
    // Requête HTTP GET pour récupérer les données des sessions moyennes de l'utilisateur
    const response = await axios.get(`${BASE_URL}/user/${id}/average-sessions`);
    return response.data; // Retourne les données de la réponse
};

/**
 * Fonction pour récupérer les performances de l'utilisateur via l'API
 * @param {number} id - L'identifiant de l'utilisateur
 * @returns {Object} - Les données de performance de l'utilisateur
 */
export const getUserPerformance = async (id) => {
    // Requête HTTP GET pour récupérer les données de performance de l'utilisateur
    const response = await axios.get(`${BASE_URL}/user/${id}/performance`);
    return response.data; // Retourne les données de la réponse
};

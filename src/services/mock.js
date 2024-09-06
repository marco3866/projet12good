// Importation des fichiers de données mockées
const USER_MAIN_DATA = require('../tests/userMainData.json');
const USER_ACTIVITY = require('../tests/userActivity.json');
const USER_AVERAGE_SESSIONS = require('../tests/userAverageSessions.json');
const USER_PERFORMANCE = require('../tests/userPerformance.json');

// Fonction pour récupérer les informations de l'utilisateur
export const getUserData = async (id) => {
  return new Promise((resolve, reject) => {
    const user = USER_MAIN_DATA.find(user => user.id === parseInt(id));
    if (user) {
      resolve({ data: user });
    } else {
      reject(new Error('User not found'));
    }
  });
};

// Fonction pour récupérer l'activité de l'utilisateur
export const getUserActivity = async (id) => {
  return new Promise((resolve, reject) => {
    const userActivity = USER_ACTIVITY.find(activity => activity.userId === parseInt(id));
    if (userActivity) {
      resolve({ data: userActivity });
    } else {
      reject(new Error('User activity not found'));
    }
  });
};

// Fonction pour récupérer les sessions moyennes de l'utilisateur
export const getUserAverageSessions = async (id) => {
  return new Promise((resolve, reject) => {
    const userSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(id));
    if (userSessions) {
      resolve({ data: userSessions });
    } else {
      reject(new Error('User sessions not found'));
    }
  });
};

// Fonction pour récupérer les performances de l'utilisateur
export const getUserPerformance = async (id) => {
  return new Promise((resolve, reject) => {
    const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === parseInt(id));
    if (userPerformance) {
      resolve({ data: userPerformance });
    } else {
      reject(new Error('User performance not found'));
    }
  });
};

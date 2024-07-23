// src/utils/formatDate.js
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// src/utils/calculatePercentage.js
export const calculatePercentage = (value, total) => {
    return (value / total * 100).toFixed(2);
};

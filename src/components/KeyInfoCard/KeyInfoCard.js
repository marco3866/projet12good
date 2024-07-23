// src/components/KeyInfoCard/KeyInfoCard.js
import React from 'react';
import './KeyInfoCard.sass';

const KeyInfoCard = ({ icon, value, label }) => {
    return (
        <div className="key-info-card">
            <img src={icon} alt={`${label} icon`} />
            <div>
                <p>{value}</p>
                <p>{label}</p>
            </div>
        </div>
    );
};

export default KeyInfoCard;

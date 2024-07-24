import React from 'react';
import PropTypes from 'prop-types';
import './KeyInfoCard.sass';

const KeyInfoCard = ({ icon, value, label }) => {
  return (
    <div className="key-info-card">
      <img src={icon} alt={label} className="key-info-icon" />
      <div>
        <p className="key-info-value">{value}</p>
        <p className="key-info-label">{label}</p>
      </div>
    </div>
  );
};

KeyInfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default KeyInfoCard;
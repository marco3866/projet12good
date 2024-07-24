// src/components/CustomTooltip/CustomTooltip.js
import React from 'react';
import PropTypes from 'prop-types';
import './CustomTooltip.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Poids : ${payload[0].value} kg`}</p>
        <p className="label">{`Calories brûlées : ${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default CustomTooltip;

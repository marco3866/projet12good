// src/components/PerformanceChart/CustomTooltip.js
import React from 'react';
import PropTypes from 'prop-types';
import './CustomTooltip.sass';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}`}</p>
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

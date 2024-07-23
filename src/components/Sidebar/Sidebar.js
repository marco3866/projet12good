import React from 'react';
import './Sidebar.sass';
import yogaIcon from '../../assets/images/yoga.svg';
import swimIcon from '../../assets/images/swim.svg';
import bikeIcon from '../../assets/images/bike.svg';
import dumbbellIcon from '../../assets/images/dumbbell.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="icon-container">
          <img src={yogaIcon} alt="Yoga" />
        </div>
        <div className="icon-container">
          <img src={swimIcon} alt="Swim" />
        </div>
        <div className="icon-container">
          <img src={bikeIcon} alt="Bike" />
        </div>
        <div className="icon-container">
          <img src={dumbbellIcon} alt="Dumbbell" />
        </div>
      </nav>
      <footer className="sidebar-footer">
        <p className="vertical-text">Copyright, SportSee 2020</p>
      </footer>
    </aside>
  );
};

export default Sidebar;

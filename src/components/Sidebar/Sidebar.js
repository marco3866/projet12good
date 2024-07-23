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
        <img src={yogaIcon} alt="Yoga" />
        <img src={swimIcon} alt="Swim" />
        <img src={bikeIcon} alt="Bike" />
        <img src={dumbbellIcon} alt="Dumbbell" />
      </nav>
      <footer className="sidebar-footer">
        <p>Copyright, SportSee 2020</p>
      </footer>
    </aside>
  );
};

export default Sidebar;

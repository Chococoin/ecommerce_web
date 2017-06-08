import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

function handlerCategoryMenu(){
  let menu = document.getElementsByClassName("CategoryMenu");
  menu.style = "50%";
}

const TopBar = props => (
  <div className="TopBar">
    <div className="Hamburger" onClick={handlerCategoryMenu()}/>
    <div className="content">
      {props.children}
    </div>
  </div>
);

TopBar.propTypes = {
  children: PropTypes.node,
};

export default TopBar;

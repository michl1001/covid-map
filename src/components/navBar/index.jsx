import React from 'react';
import './style.css';


class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
            Title
        </div>

        <div className="view">
            About
        </div>
        
        <div className="divider">
          <span className="bar" />
        </div>
      </div>
    );
  }
}

export default NavBar;

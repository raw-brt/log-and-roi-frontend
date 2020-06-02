import React from 'react';
import logo from '../../assets/images/logo_landscape.svg';

const ResponsiveNavbar = () => {

  return (
    <div className='responsive-navbar'>
      <div className='navbar-logo'>
        <img className='logo-responsive' src={logo} />
      </div>
      <div className='dropdown-button'>
        <img className='dropdown-icon' src='../../assets/images/dropdown_icon.svg' alt='Show projects' />
      </div>
    </div>
  )
}

export default ResponsiveNavbar;
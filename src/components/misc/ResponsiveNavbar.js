import React,{ useContext }  from 'react';
import { NavBarContext } from '../../contexts/NavBarContext';
import logo from '../../assets/images/logo_landscape.svg';
import dropdown from '../../assets/images/dropdown_icon.svg';
import dropup from '../../assets/images/dropup.svg'

const ResponsiveNavbar = () => {
  const { isSidebarDropped, setIsSidebarDropped } = useContext(NavBarContext);

  // Check viewport width
  let isResponsive = window.innerWidth < 1150;

  if (isSidebarDropped && !isResponsive) {
    setIsSidebarDropped(!isSidebarDropped)
  }

  return (
    <div className='responsive-navbar'>
      <div className='navbar-logo'>
        <img className='logo-responsive' src={logo} />
      </div>
      <div className='dropdown-button'>
        <img 
          className='dropdown-icon' 
          src={
            isSidebarDropped
              ? dropup
              : dropdown
          } 
          alt='Show projects'
          role='button'
          onClick={() => setIsSidebarDropped(!isSidebarDropped)}      
          />
      </div>
    </div>
  )
}

export default ResponsiveNavbar;
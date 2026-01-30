import React, { useState } from 'react';
import logo from '../assets/EB5-Global-Capital-logo.gif';

const Navbar = () => {
  // States for multiple dropdowns
  const [showDemoSub, setShowDemoSub] = useState(false);
  const [showInvestorsSub, setShowInvestorsSub] = useState(false);

  // Common Style for Submenu
  const submenuStyle = {
    position: 'absolute',
    top: '85px', // Exact height of the navbar
    left: '0px',
    backgroundColor: '#ffffff',
    color: '#000000',
    width: '165px',
    padding: '2px 0px',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
    listStyle: 'none',
   /*  backgroundColor:'#be0b31', */
    fontWeight: '400',
    zIndex: 2000,
    
  };

 const navItemStyle = {
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    height: '100%', // Full height check
    padding: '0 5px'
  };

  return (
    <nav style={{ 
      backgroundColor: '#000000', 
      height: '93px', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '0px 60px',
      
      top: 0,
      zIndex: 1000,
      fontFamily: '"Roboto", sans-serif'
    }}>
      
      {/* Logo */}
      <div style={{ height: '66px' }}>
        <img src={logo} alt="Logo" style={{ height: '100%' ,marginLeft:'-15px', }} />
      </div>

      {/* Menu */}
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '25px', 
        color: '#FFFFFF', 
        fontSize: '15px', 
        fontWeight: '700',
        height: '100%', // Navbar ki poori height lega
        margin: 0
      }}>
        
        {/* DEMO Dropdown */}
        <li 
          onMouseEnter={() => setShowDemoSub(true)}
          onMouseLeave={() => setShowDemoSub(false)}
          style={{ ...navItemStyle, position: 'relative' }}
          className="hover-gold"
        >
          DEMO <span style={{ fontSize: '10px', marginLeft: '5px' }}>▼</span>
          {showDemoSub && (
            <ul style={submenuStyle}>
              <li className="submenu-item" style={{ padding: '10px 20px' }}>
                Home v1
              </li>
            </ul>
          )}
        </li>

        <li style={navItemStyle} className="hover-gold">ABOUT</li>

        {/* FOR INVESTORS Dropdown */}
        <li 
          onMouseEnter={() => setShowInvestorsSub(true)}
          onMouseLeave={() => setShowInvestorsSub(false)}
          style={{ ...navItemStyle, position: 'relative' }}
          className="hover-gold"
        >
          FOR INVESTORS <span style={{ fontSize: '10px', marginLeft: '5px' }}>▼</span>
          {showInvestorsSub && (
            <ul style={submenuStyle}>
              <li className="submenu-item" style={{ padding: '10px 20px'}}>
                Development
              </li>
            </ul>
          )}
        </li>

        <li style={navItemStyle} className="hover-gold">CONTACT</li>
      </ul>

      {/* Hover Styles using CSS-in-JS logic or Global CSS */}
      <style>{`
        .hover-gold:hover {
          color: #ffa700 !important;
        }
        .submenu-item:hover {
          background-color: #f5f5f5;
          color: #ffa700;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
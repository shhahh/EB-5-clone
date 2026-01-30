import React, { useState } from 'react';
import logo from '../assets/EB5-Global-Capital-logo.gif';

const Navbar = () => {
  // Desktop Dropdown States
  const [showDemoSub, setShowDemoSub] = useState(false);
  const [showInvestorsSub, setShowInvestorsSub] = useState(false);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- DESKTOP STYLES (Wahi jo aapne pehle final kiye the) ---
  const navItemStyle = {
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 5px'
  };

  const submenuStyle = {
    position: 'absolute',
    top: '85px', 
    left: '0px',
    backgroundColor: '#ffffff',
    color: '#000000',
    width: '165px',
    padding: '2px 0px',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
    listStyle: 'none',
    fontWeight: '400',
    zIndex: 2000,
  };

  return (
    <>
      <nav style={{ 
        backgroundColor: '#000000', 
        height: '93px', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0px 60px',
        position: 'fixed',
        top: 0,
        zIndex: 9999, // Sabse upar
        fontFamily: '"Roboto", sans-serif'
      }}>
        
        {/* Logo Section */}
        <div style={{ height: '66px' }}>
          <img src={logo} alt="Logo" style={{ height: '100%', marginLeft: '-15px' }} />
        </div>

        {/* --- DESKTOP MENU (Wahi original code) --- */}
        <ul className="desktop-menu" style={{ 
          display: 'flex', 
          listStyle: 'none', 
          gap: '25px', 
          color: '#FFFFFF', 
          fontSize: '15px', 
          fontWeight: '700',
          height: '100%',
          margin: 0
        }}>
          <li 
            onMouseEnter={() => setShowDemoSub(true)}
            onMouseLeave={() => setShowDemoSub(false)}
            style={{ ...navItemStyle, position: 'relative' }}
            className="hover-gold"
          >
            DEMO <span style={{ fontSize: '10px', marginLeft: '5px' }}>▼</span>
            {showDemoSub && (
              <ul style={submenuStyle}>
                <li className="submenu-item" style={{ padding: '10px 20px' }}>Home v1</li>
              </ul>
            )}
          </li>

          <li style={navItemStyle} className="hover-gold">ABOUT</li>

          <li 
            onMouseEnter={() => setShowInvestorsSub(true)}
            onMouseLeave={() => setShowInvestorsSub(false)}
            style={{ ...navItemStyle, position: 'relative' }}
            className="hover-gold"
          >
            FOR INVESTORS <span style={{ fontSize: '10px', marginLeft: '5px' }}>▼</span>
            {showInvestorsSub && (
              <ul style={submenuStyle}>
                <li className="submenu-item" style={{ padding: '10px 20px'}}>Development</li>
              </ul>
            )}
          </li>

          <li style={navItemStyle} className="hover-gold">CONTACT</li>
        </ul>

        {/* --- HAMBURGER (Only for Mobile) --- */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', zIndex: 10000 }}>
          <div style={{ width: '28px', height: '3px', backgroundColor: '#fff', margin: '5px 0', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : '' }}></div>
          <div style={{ width: '28px', height: '3px', backgroundColor: '#fff', margin: '5px 0', opacity: isMobileMenuOpen ? 0 : 1 }}></div>
          <div style={{ width: '28px', height: '3px', backgroundColor: '#fff', margin: '5px 0', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : '' }}></div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER (Isolated Logic) --- */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 9998, // Dots ke upar
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 80px', // Left alignment matching mission
        transition: 'all 0.4s ease-in-out',
        transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        textAlign: 'left'
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={mobileLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>DEMO</li>
          <li style={mobileLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>ABOUT</li>
          <li style={mobileLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>FOR INVESTORS</li>
          <li style={mobileLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>CONTACT</li>
        </ul>
      </div>

      <style>{`
        .hover-gold:hover { color: #ffa700 !important; }
        .submenu-item:hover { background-color: #f5f5f5; color: #ffa700; }
        
        .hamburger { display: none; }

        @media (max-width: 768px) {
          nav { padding: 0 20px !important; }
          .desktop-menu { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
};

const mobileLinkStyle = {
  color: '#FFFFFF',
  fontSize: '24px',
  fontWeight: '700',
  fontFamily: '"Staatliches", sans-serif',
  marginBottom: '35px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  letterSpacing: '1px'
};

export default Navbar;
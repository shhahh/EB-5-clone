import React, { useState, useEffect } from 'react';

const sections = [
  { id: 1, name: 'Mission Statement' },
  { id: 2, name: 'Why Choose Us?' },
  { id: 3, name: 'How The Process Works' },
  { id: 4, name: 'Current Projects' },
  { id: 5, name: 'Testimonial' },
  { id: 6, name: 'Start Your Journey Today' }
];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState(1);

  // 1. Click hone par smooth scroll karne ka function
  const scrollToSection = (id) => {
    const element = document.getElementById(`section${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Scroll karte waqt detection ki abhi kaunsa section screen par hai
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset taaki thoda pehle hi change ho jaye

      sections.forEach((section) => {
        const element = document.getElementById(`section${section.id}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- Right Side Dots --- */}
      <div style={{
        position: 'fixed',
        right: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px', 
        alignItems: 'flex-end'
      }}>
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="dot-container" 
            onClick={() => scrollToSection(section.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}
          >
            {/* Label Jo Hover par dikhta hai */}
            <span className="dot-label" style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '4px 12px',
              borderRadius: '2px',
              fontSize: '12px',
              fontWeight: '600',
              opacity: 0,
              visibility: 'hidden',
              transition: '0.3s',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              whiteSpace: 'nowrap'
            }}>
              {section.name}
            </span>

            {/* Dot - Active section par Yellow rahega */}
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: activeSection === section.id ? '#ffa700' : 'rgba(255,255,255,0.4)',
              border: activeSection === section.id ? '2px solid #ffa700' : 'none',
              transition: '0.3s',
              transform: activeSection === section.id ? 'scale(1.3)' : 'scale(1)'
            }} className="dot"></div>
          </div>
        ))}
      </div>

      {/* --- Right Bottom Up Arrow (Increased Size) --- */}
      <div style={{
        position: 'fixed',
        right: '25px',
        bottom: '25px',
        zIndex: 2000,
        cursor: 'pointer',
        color: 'white',
        opacity: '0.7',
        transition: '0.3s'
      }} 
      className="scroll-up-btn"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        {/* SVG Size badha di gayi hai (60px) aur bold kiya gaya hai */}
        <svg 
          width="40" 
          height="60" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </div>

      <style>{`
        .dot-container:hover .dot-label { 
          opacity: 1; 
          visibility: visible; 
          transform: translateX(-5px); 
        }
        .dot-container:hover .dot { 
          background-color: #ffa700 !important; 
          transform: scale(1.3); 
        }
        .scroll-up-btn:hover {
          opacity: 1;
          color: #ffa700;
          transform: translateY(-8px);
        }
      `}</style>
    </>
  );
};

export default SideNav;
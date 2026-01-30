import React, { useEffect, useRef, useState } from 'react';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); 
        }
      },
      { threshold: 0.1 } 
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { text: "Your investment, your ", highlight: "American dream", suffix: " made possible." },
    { text: "Invest with confidence and secure your U.S. ", highlight: "Green Card", suffix: " through EB-5." },
    { text: "A ", highlight: "seamless", suffix: " investment process designed for your peace of mind." },
    { text: "", highlight: "Trusted", suffix: " by global investors, backed by proven success." },
    { text: "Guided by EB-5 ", highlight: "experts", suffix: " with years of experience." },
    { text: "Full ", highlight: "transparency", suffix: " at every step of your EB-5 journey." }
  ];

  return (
    <section id="section2" ref={sectionRef} style={{
      position: 'relative', height: '100vh', width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'url("/images/slide-img-02.jpg")',
      backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'
    }}>
      {/* Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 1 }}></div>

      {/* Content Wrapper */}
      <div className={`mission-content-wrapper ${isVisible ? 'animate-falling-heavy' : ''}`} style={{
        position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', 
        padding: '0 80px', opacity: isVisible ? 1 : 0
      }}>
        
        <div style={{ maxWidth: '850px' }} className="mission-inner-container">
          <h2 className="mission-title" style={{
            fontFamily: '"Staatliches", sans-serif', fontSize: '50px', color: '#FFFFFF', 
            marginBottom: '5px', marginLeft: '-50px', textTransform: 'uppercase',
            fontWeight: '500', letterSpacing: '0.5px'
          }}>
            Why Choose EB-5 Global Capital
          </h2>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
            {items.map((item, index) => (
              <li className="mission-list-item" key={index} style={{
                display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#fff',
                fontSize: '20px', marginLeft: '-50px', marginBottom: '18px', 
                fontWeight: '500', fontFamily: '"Roboto", sans-serif', lineHeight: '1.1'
              }}>
                <span style={{ color: '#ffffff' }}>➤</span>
                <span>
                  {item.text}
                  <span style={{ color: '#ffa700' }}>{item.highlight}</span>
                  {item.suffix}
                </span>
              </li>
            ))}
          </ul>

          <button className="hero-btn-final mission-btn" style={{ marginLeft: '-50px' }}>
             <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-97.3-216-216 0-118.7 97.3-216 216-216 118.7 0 216 97.3 216 216 0 118.7-97.3 216-216 216zm-48-242.5V184c0-6.6 5.4-12 12-12h41.4c6.4 0 12.5 2.5 17 7l72.7 73c4.7 4.7 4.7 12.3 0 17l-72.7 73c-4.5 4.5-10.6 7-17 7H220c-6.6 0-12-5.4-12-12v-30.5c0-4.5 2.5-8.5 6.4-10.3l56.9-25.6c6.1-2.8 6.1-11.4 0-14.2l-56.9-25.6c-3.9-1.8-6.4-5.8-6.4-10.3z"/>
             </svg>
            Start My EB-5 Journey
          </button>
        </div>
      </div>

      {/* MOBILE RESPONSIVE STYLES (Desktop stays untouched) */}
      <style>{`
        @media (max-width: 768px) {
          .mission-content-wrapper {
            padding: 0 25px !important; /* Mobile padding reduced */
          }
          
          .mission-title {
            font-size: 32px !important; /* Smaller font on mobile */
            margin-left: 0 !important; /* Margin reset */
            margin-bottom: 20px !important;
          }

          .mission-list-item {
            font-size: 16px !important; /* Smaller list text */
            margin-left: 0 !important; /* Margin reset */
            margin-bottom: 15px !important;
            line-height: 1.3 !important;
          }

          .mission-btn {
            margin-left: 0 !important; /* Margin reset */
            width: 100%; /* Optional: Full width button on mobile */
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Mission;
import React, { useEffect, useRef, useState } from 'react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const allSteps = [
    { title: "Consultation", desc: "We review your eligibility and explain EB-5 requirements." },
    { title: "Investment", desc: "Select from trusted, vetted projects designed for success." },
    { title: "Application", desc: "Our experts file your EB-5 petition with complete documentation." },
    { title: "Green Card", desc: "Receive conditional Green Cards for you and your family." },
    { title: "Residency", desc: "Secure permanent U.S. residency and future opportunities." },
  ];

  return (
    <section id="section3" ref={sectionRef} style={{
      position: 'relative', 
      minHeight: '100vh', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundImage: 'url("/images/slide-img-06.jpg")',

      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      padding: '100px 0', 
      overflow: 'hidden',
      borderBottom: '2px solid #be0b31' // Bottom Red Border
    }}>
      {/* Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 }}></div>

      <div className={`process-container ${isVisible ? 'animate-falling-heavy' : ''}`} style={{
        position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', 
        padding: '0 60px', opacity: isVisible ? 1 : 0, textAlign: 'center'
      }}>
        
        {/* Header Section */}
        <h2 style={{
          fontFamily: '"Staatliches", sans-serif', fontSize: '50px',fontWeight: '500',letterSpacing:'0.5px',lineHeight:'66px', color: '#FFFFFF', 
          marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px'
        }}>
          How the EB-5 Process Works
        </h2>
        <p style={{
          fontFamily: '"Roboto", sans-serif', fontSize: '24px', fontWeight: '300', height:'102', color: '#ddd', 
          maxWidth: '850px', margin: '0 auto 60px auto', lineHeight: '1.5'
        }}>
          A step-by-step path to permanent U.S. residency through <br></br> investment. We’ve made the EB-5 journey simple, transparent, and <br></br>investor-friendly.
        </p>

        {/* Two Inner Containers (50/50) */}
        <div style={{
          display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center'
        }}>
          
          {/* Left Container - All Content Here */}
          <div className="process-box">
            {allSteps.map((step, index) => (
              <div key={index} className="step-group">
                <div className="step-header">
                  <span className="step-icon">{'>>'}</span>
                  <h4 className="step-title">{step.title}</h4>
                </div>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Container - Empty but 50% width */}
          <div className="process-box empty-box">
            {/* Keeping it empty as per requirement */}
          </div>

        </div>
      </div>

      <style>{`
        .process-box {
          flex: 1;
          margin-left:-50px;
          min-width: 350px;
          min-height: 550px; /* High height transparency boxes */
          background-color: rgba(0, 0, 0, 0.12); /* 50% Transparency style */
          backdrop-filter: blur(8px);
          padding: 50px 40px;
          border-radius: 4px;
          text-align: left;
          transition: all 0.3s ease;
        }

        .empty-box {
           
          background-color: rgba(0, 0, 0, 0.12); /* Lighter transparency for the empty one */
        }

        .step-group {
          margin-bottom: 30px;
          cursor: pointer;
          transition: 0.3s;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 5px;
          transition: 0.3s;
        }

        .step-icon {
          color: #ffffff;
          font-weight: bold;
          font-size: 18px;
          transition: 0.3s;
        }

        .step-title {
          font-family: "Roboto", sans-serif;
          font-size: 22px;
          color: #ffffff;          
          letter-spacing: 0.5px;
          transition: 0.3s;
        }

        .step-desc {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          color: #cccccc;
          line-height: 1.4;
          padding-left: 30px; /* Aligned with title */
        }

        /* Hover Effect: Icon and Title turn Yellow */
        .step-group:hover .step-icon,
        .step-group:hover .step-title {
          color: #ffa700 !important;
        }

        @media (max-width: 768px) {
          .process-box { min-width: 100%; min-height: auto; padding: 30px 20px; }
          .empty-box { display: none; } /* Hide empty box on mobile */
          h2 { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
};

export default Process;
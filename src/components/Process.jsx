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
      borderBottom: '2px solid #be0b31' 
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 }}></div>

      <div className={`process-container ${isVisible ? 'animate-falling-heavy' : ''}`} style={{
        position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', 
        padding: '0 60px', opacity: isVisible ? 1 : 0, textAlign: 'center'
      }}>
        
        <h2 className="process-heading" style={{
          fontFamily: '"Staatliches", sans-serif', fontSize: '50px', fontWeight: '500', color: '#FFFFFF', 
          marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '66px'
        }}>
          How the EB-5 Process Works
        </h2>
        <p className="process-subheading" style={{
          fontFamily: '"Roboto", sans-serif', fontSize: '24px', fontWeight: '300', color: '#ddd', 
          maxWidth: '850px', margin: '0 auto 60px auto', lineHeight: '1.5'
        }}>
          A step-by-step path to permanent U.S. residency through investment. We’ve made the EB-5 journey simple, transparent, and investor-friendly.
        </p>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
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

          <div className="process-box empty-box">
          </div>

        </div>
      </div>

      <style>{`
        .process-box {
          flex: 1;
          margin-left: -50px;
          min-width: 350px;
          min-height: 550px;
          background-color: rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(8px);
          padding: 50px 40px;
          border-radius: 4px;
          text-align: left;
          transition: all 0.3s ease;
        }

        .empty-box {
          background-color: rgba(0, 0, 0, 0.12);
        }

        .step-group { margin-bottom: 30px; cursor: pointer; transition: 0.3s; }
        .step-header { display: flex; alignItems: center; gap: 10px; margin-bottom: 5px; }
        .step-icon { color: #ffffff; font-weight: bold; fontSize: 18px; }
        .step-title { font-family: "Roboto", sans-serif; fontSize: 22px; color: #ffffff; letter-spacing: 0.5px; }
        .step-desc { font-family: "Roboto", sans-serif; fontSize: 16px; color: #cccccc; line-height: 1.4; padding-left: 30px; }

        .step-group:hover .step-icon,
        .step-group:hover .step-title { color: #ffa700 !important; }

        /* --- MOBILE RESPONSIVE FIXES (Desktop is safe) --- */
        @media (max-width: 768px) {
          .process-container {
            padding: 0 20px !important;
          }

          .process-heading {
            font-size: 32px !important;
            line-height: 1.2 !important;
            margin-bottom: 15px !important;
          }

          .process-subheading {
            font-size: 16px !important;
            margin-bottom: 40px !important;
            padding: 0 10px !important;
          }

          .process-box {
            margin-left: 0 !important; /* Fixed the -50px gap */
            min-width: 100% !important;
            min-height: auto !important;
            padding: 30px 20px !important;
          }

          .empty-box {
            display: none !important; /* Hide empty box on mobile */
          }

          .step-title {
            font-size: 19px !important;
          }

          .step-desc {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
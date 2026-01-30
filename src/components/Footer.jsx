import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/EB5-Global-Capital-logo.gif';

const FinalSections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SECTION 6: CALL TO ACTION (CTA) - Height Increased */}
      <section id="section6" ref={sectionRef} style={{
        position: 'relative', 
        minHeight: '100vh', // Increased height to full screen
        width: '100%',
        backgroundImage: 'url("/images/slide-img-06.jpg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 }}></div>

        <div className={`cta-container ${isVisible ? 'animate-falling-heavy' : ''}`} style={{
          position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', 
          margin: '0 auto', padding: '0 80px', opacity: isVisible ? 1 : 0
        }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{
              fontFamily: '"Staatliches", sans-serif', fontSize: '50px', color: '#FFFFFF', 
              marginBottom: '20px', textTransform: 'uppercase', marginLeft: '-50px',
              lineHeight: '1.1'
            }}>
              Start Your EB-5 Journey Today
            </h2>
            <p style={{
              fontFamily: '"Roboto", sans-serif', fontSize: '24px', color: '#ddd', 
              marginBottom: '50px', marginLeft: '-50px', maxWidth: '850px',
              lineHeight: '1.5'
            }}>
              Secure your path to U.S. residency through smart investment opportunities.
            </p>

            <div style={{ display: 'flex', gap: '25px', marginLeft: '-50px', flexWrap: 'wrap' }}>
             <button className="hero-btn-final">
          <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-97.3-216-216 0-118.7 97.3-216 216-216 118.7 0 216 97.3 216 216 0 118.7-97.3 216-216 216zm-48-242.5V184c0-6.6 5.4-12 12-12h41.4c6.4 0 12.5 2.5 17 7l72.7 73c4.7 4.7 4.7 12.3 0 17l-72.7 73c-4.5 4.5-10.6 7-17 7H220c-6.6 0-12-5.4-12-12v-30.5c0-4.5 2.5-8.5 6.4-10.3l56.9-25.6c6.1-2.8 6.1-11.4 0-14.2l-56.9-25.6c-3.9-1.8-6.4-5.8-6.4-10.3z"/>
          </svg>
          Speak with an EB-5 Expert
        </button>
 <button className="hero-btn-final">
          <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-97.3-216-216 0-118.7 97.3-216 216-216 118.7 0 216 97.3 216 216 0 118.7-97.3 216-216 216zm-48-242.5V184c0-6.6 5.4-12 12-12h41.4c6.4 0 12.5 2.5 17 7l72.7 73c4.7 4.7 4.7 12.3 0 17l-72.7 73c-4.5 4.5-10.6 7-17 7H220c-6.6 0-12-5.4-12-12v-30.5c0-4.5 2.5-8.5 6.4-10.3l56.9-25.6c6.1-2.8 6.1-11.4 0-14.2l-56.9-25.6c-3.9-1.8-6.4-5.8-6.4-10.3z"/>
          </svg>
          LAERN MORE
        </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FOOTER - All Content Centered & Stacked */}
      <footer style={{
        position: 'relative', 
        width: '100%', 
        padding: '120px 20px',
        backgroundImage: 'url("/images/pentagon-bg.jpg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        textAlign: 'center', 
        color: '#FFFFFF', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Dark Overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11, 11, 11, 0.84)', zIndex: 1 }}></div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', width: '100%' }}>
          
          {/* 1. Logo */}
          <div style={{ marginBottom: '8px' }}>
            <img src={logo} alt="EB5 Logo" style={{ height: '75px' }} />
          </div>
          
          {/* 2. Tagline */}
          <p style={{ fontSize: '18px', color: '#ccc', marginBottom: '27px', fontFamily: '"Roboto", sans-serif' }}>
            Your trusted partner in securing U.S. residency through investment.
          </p>

          {/* 3. Projects Heading */}
          <h3 style={{ fontFamily: '"Staatliches", sans-serif', fontSize: '22px', marginBottom: '10px' }}>
            EB-5 PROJECTS
          </h3>
          
          {/* 4. Project Links */}
          <p style={{ fontSize: '16px', color: '#fff', marginBottom: '40px', cursor: 'pointer' }} className="footer-link">
            Current Projects | Future Projects
          </p>

          {/* 5. Contact Heading */}
          <h3 style={{ fontFamily: '"Staatliches", sans-serif', fontSize: '23px', marginBottom: '8px',marginTop: '-20px' }}>
            CONTACT
          </h3>
          
          {/* 6. Email */}
          <p style={{ fontSize: '18px', color: '#fff', marginBottom: '60px' }}>
            Email: info@eb5.com
          </p>

          {/* 7. Copyright Line */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', fontSize: '14px', color: '#777', letterSpacing: '1px' }}>
            © 2026 EB-5 GLOBAL CAPITAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      <style>{`
        .footer-link:hover { color: #ffa700; transition: 0.3s; }
        
        @media (max-width: 768px) {
          .cta-container { padding: 0 30px !important; }
          h2, p, div { margin-left: 0 !important; text-align: center !important; }
          .hero-btn-final { width: 100%; justify-content: center; }
          h2 { font-size: 38px !important; }
          h3 { font-size: 28px !important; }
        }
      `}</style>
    </>
  );
};

export default FinalSections;
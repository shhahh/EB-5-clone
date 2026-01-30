import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Data Array with Correct Paths
  const projects = [
    {
      title: "Hyatt Place – Turlock",
      desc: "A contemporary hotel project in Turlock, offering stylish accommodations and catering to both business and leisure travelers.",
      img: "/images/Hilton-img-1.jpg" // Ye path public/images/ se uthayega
    },
    {
      title: "Tru by Hilton – Merced, CA",
      desc: "The Tru by Hilton in Merced represents a modern approach to hospitality, designed to meet the needs of today’s travelers seeking both comfort and affordability.",
      img: "/images/home-placeholder-34-1.jpg" // Ye path public/images/ se uthayega
    }
  ];

  // Auto-change content every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Animation Trigger
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section4" ref={sectionRef} style={{
      position: 'relative', minHeight: '100vh', width: '100%',
      backgroundImage: 'url("/images/slide-img-04.jpg")',
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '100px 0', overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 }}></div>

      <div className={isVisible ? 'animate-falling-heavy' : ''} style={{
        position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', padding: '0 60px', opacity: isVisible ? 1 : 0
      }}>
        
        {/* Top Centered Animated Buttons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '60px', flexWrap: 'wrap' }}>
          <button className="animated-border-btn">Completed Projects</button>
          <button className="animated-border-btn">Future Projects</button>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          
          {/* Card 1: Text Content */}
          <div className="project-card text-card">
            <div style={{ transition: 'all 0.5s ease' }}>
              <h3 className="project-heading">{projects[activeIndex].title}</h3>
              <p className="project-para">{projects[activeIndex].desc}</p>
              
              {/* Button with 10px Top Margin */}
              <button className="hero-btn-final" style={{ marginTop: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-97.3-216-216 0-118.7 97.3-216 216-216 118.7 0 216 97.3 216 216 0 118.7-97.3 216-216 216zm-48-242.5V184c0-6.6 5.4-12 12-12h41.4c6.4 0 12.5 2.5 17 7l72.7 73c4.7 4.7 4.7 12.3 0 17l-72.7 73c-4.5 4.5-10.6 7-17 7H220c-6.6 0-12-5.4-12-12v-30.5c0-4.5 2.5-8.5 6.4-10.3l56.9-25.6c6.1-2.8 6.1-11.4 0-14.2l-56.9-25.6c-3.9-1.8-6.4-5.8-6.4-10.3z"/>
                </svg>
                View More Details
              </button>
            </div>
          </div>

          {/* Card 2: Image Content */}
          <div className="project-card image-card">
            {/* Key attribute added to force re-render/animate on image change */}
            <img 
              key={activeIndex}
              src={projects[activeIndex].img} 
              alt="EB5 Project" 
              className="fade-in-image"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <div className="img-btn-overlay">
              <button className="hero-btn-final">
                <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-97.3-216-216 0-118.7 97.3-216 216-216 118.7 0 216 97.3 216 216 0 118.7-97.3 216-216 216zm-48-242.5V184c0-6.6 5.4-12 12-12h41.4c6.4 0 12.5 2.5 17 7l72.7 73c4.7 4.7 4.7 12.3 0 17l-72.7 73c-4.5 4.5-10.6 7-17 7H220c-6.6 0-12-5.4-12-12v-30.5c0-4.5 2.5-8.5 6.4-10.3l56.9-25.6c6.1-2.8 6.1-11.4 0-14.2l-56.9-25.6c-3.9-1.8-6.4-5.8-6.4-10.3z"/>
                </svg>
                View More Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-card {
          flex: 1;
          min-width: 350px;
          min-height: 450px;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .text-card {
          background-color: rgba(0, 0, 0, 0.6); /* Black low transparent */
          backdrop-filter: blur(5px);
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .project-heading {
          font-family: "Staatliches", sans-serif;
          font-size: 45px;
          color: #ffa700; /* Matching theme */
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .project-para {
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          color: #fff;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .fade-in-image {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        .img-btn-overlay {
          position: absolute;
          bottom: 30px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .project-card { min-width: 100%; min-height: auto; }
          .text-card { padding: 40px 20px; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
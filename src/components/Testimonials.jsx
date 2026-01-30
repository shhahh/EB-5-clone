import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reviews = [
    {
      text: "EB-5 Global Capital made the entire process seamless. From the initial consultation to securing my Green Card, their team guided me every step of the way. I always felt supported and informed.",
      author: "Ananya S., Investor from India"
    },
    {
      text: "What impressed me most was their professionalism and expertise. They simplified a very complex process and gave me confidence throughout. I highly recommend EB-5 Global Capital to anyone serious about U.S. immigration through investment.",
      author: "Li Wei, Investor from China"
    },
    {
      text: "EB-5 Global Capital delivered exactly what they promised—a seamless and fast process. Their trustworthy team of experts handled everything with precision, and now my Green Card is within reach.",
      author: "Hong Lee, Investor from China"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section5" ref={sectionRef} style={{
      position: 'relative', minHeight: '100vh', width: '100%',
      backgroundImage: 'url("/images/slide-img-09.jpg")',
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', flexDirection: 'column',
      padding: '120px 0 80px 0', // Top margin added here
      overflow: 'hidden',
      borderTop: '2px solid #00497a'
    }}>
      {/* Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 1 }}></div>

      <div className={`testimonial-container ${isVisible ? 'animate-falling-heavy' : ''}`} style={{
        position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', 
        margin: '0 auto', padding: '0 80px', opacity: isVisible ? 1 : 0
      }}>
        
        {/* Content Box - Aligned Left like Mission.jsx */}
        <div style={{ maxWidth: '750px', textAlign: 'left' }}>
          
          {/* Heading with Mission-style offset */}
          <h2 style={{
            fontFamily: '"Staatliches", sans-serif', fontSize: '50px', color: '#FFFFFF', 
            marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px',
            marginLeft: '-50px' 
          }}>
            WE SERVE GLOBAL INVESTORS
          </h2>

          {/* 5 Yellow Stars */}
          <div style={{ color: '#ffa700', fontSize: '24px', marginBottom: '30px', marginLeft: '-50px' }}>
            ★★★★★
          </div>

          {/* 50% Size Text Box (Left Aligned) */}
          <div className="testimonial-content-box" style={{ marginLeft: '-50px' }}>
            
            <div className="quote-wrapper" key={activeIndex}>
              <p className="testimonial-text">
                "{reviews[activeIndex].text}"
              </p>
              <h4 className="testimonial-author">
                — {reviews[activeIndex].author}
              </h4>
            </div>

            {/* Dots - Now aligned to the start of the text */}
            <div className="dots-container-left">
              {reviews.map((_, index) => (
                <div 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`dot ${activeIndex === index ? 'active-dot' : ''}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-text {
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          color: #ffffff;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 25px;
          min-height: 120px; /* Prevents layout jump */
        }

        .testimonial-author {
          font-family: "Roboto", sans-serif;
          font-size: 19px;
          color: #ffa700;
          font-weight: 500;
        }

        .quote-wrapper {
          animation: slideUpFade 0.6s ease-out;
        }

        .dots-container-left {
          display: flex;
          justify-content: flex-start;
          gap: 12px;
          margin-top: 50px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: 0.3s;
        }

        .active-dot {
          background-color: #ffa700;
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          section { padding: 80px 20px !important; }
          .testimonial-container { padding: 0 20px !important; }
          h2, .testimonial-content-box, .dots-container-left { margin-left: 0 !important; }
          h2 { font-size: 32px !important; }
          .testimonial-text { font-size: 17px; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
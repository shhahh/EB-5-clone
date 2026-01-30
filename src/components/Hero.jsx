import React from 'react';

const Hero = () => {
  return (
    <div id="section1" className="hero-container snap-section">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/videos/banner-vid2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Content Area */}
      <div className="hero-content animate-slide-up">
        <h1 className="hero-heading">
          Transform your investment into a U.S. Green <br className="hidden-mobile" /> Card and unlimited opportunity
        </h1>

        <p className="hero-subheading">
          Partner with <span className="highlight-text">EB-5 Global Capital</span>, California’s leading pathway to the <br className="hidden-mobile" /> American Dream
        </p>

        <button className="hero-btn-final">
          <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-97.3-216-216 0-118.7 97.3-216 216-216 118.7 0 216 97.3 216 216 0 118.7-97.3 216-216 216zm-48-242.5V184c0-6.6 5.4-12 12-12h41.4c6.4 0 12.5 2.5 17 7l72.7 73c4.7 4.7 4.7 12.3 0 17l-72.7 73c-4.5 4.5-10.6 7-17 7H220c-6.6 0-12-5.4-12-12v-30.5c0-4.5 2.5-8.5 6.4-10.3l56.9-25.6c6.1-2.8 6.1-11.4 0-14.2l-56.9-25.6c-3.9-1.8-6.4-5.8-6.4-10.3z"/>
          </svg>
          EXPLORE EB-5 OPPORTUNITIES
        </button>
      </div>

      {/* Decorative Bottom Border */}
      <div className="hero-bottom-line"></div>

      {/* Clean CSS Styles */}
      <style>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(2, 3, 3, 0.45);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1200px;
          padding: 0 100px;
        }

        .hero-heading {
          font-family: "Staatliches", sans-serif;
          font-size: 55px;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .hero-subheading {
          font-family: "Roboto", sans-serif;
          font-size: 24px;
          color: #FFFFFF;
          margin-bottom: 40px;
          font-weight: 400;
          line-height: 1.4;
        }

        .highlight-text {
          color: #ffa700;
          font-weight: bold;
        }

        .hero-btn-final {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          font-weight: 700;
          padding: 12px 35px;
          background-color: transparent;
          color: #FFFFFF;
          border: 1px solid #FFFFFF;
          border-radius: 50px;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .hero-btn-final:hover {
          background-color: #FFFFFF;
          color: #000;
        }

        .hero-bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 3px solid #be0b31;
          z-index: 3;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 32px !important;
          }
          .hero-subheading {
            font-size: 18px !important;
          }
          .hero-content {
            padding: 0 20px !important;
          }
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
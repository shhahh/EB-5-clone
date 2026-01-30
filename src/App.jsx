import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Process from './components/Process';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FinalSections from './components/Footer';
import SideNav from './components/SideNav';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <SideNav />
      <Hero />
      <Mission />
      <Process />
      <Projects/>
     <Testimonials />
     <FinalSections />
    </div>
  );
}

export default App;
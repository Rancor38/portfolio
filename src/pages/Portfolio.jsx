import React from 'react';
import Header from '../components/Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    );
};

export default Portfolio;
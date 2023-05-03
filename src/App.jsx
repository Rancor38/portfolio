import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


import Nav from './components/Nav';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Redirects from './components/Redirects';


const App = () => {

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle page transition
  const handleTransition = () => {
    setIsTransitioning(true);

    // Wait for the transition to complete before updating state
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <>
    <Nav handler={handleTransition} />
        <div className="portfolio" id={isTransitioning ? "fade-out" : "fade-in"} >
      <Routes>
        <Route path='/' exact element={<About />} />
        <Route path='/skills' exact element={<Skills />} />
        <Route path='/projects' exact element={<Projects />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/snoof' exact element={<PageNotFound />} />
        <Route path='*' element={<Redirects/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;

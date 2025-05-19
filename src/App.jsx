import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Nav from './components/Nav';
import Loading from './components/Loading';

// Lazy-loaded pages for better performance
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Redirects = lazy(() => import('./components/Redirects'));

const App = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  // Function to handle page transition (memoized with useCallback)
  const handleTransition = useCallback(() => {
    setIsTransitioning(true);

    // Wait for the transition to complete before updating state
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  // Page transition variants for framer-motion
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
      <Nav handler={handleTransition} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="portfolio"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
        >
          <Suspense fallback={<Loading />}>
            <Routes location={location}>
              <Route path='/' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/snoof' element={<PageNotFound />} />
              <Route path='*' element={<Redirects />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;

import './App.css';
import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Components
import Loading from './components/Loading';
import Header from './components/Header';

// Lazy-loaded pages for better performance
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Track scrolling and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adding offset for better detection

      // Check which section is currently in view
      if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < (skillsRef.current?.offsetTop || Infinity)) {
        setActiveSection('about');
      } else if (skillsRef.current && scrollPosition >= skillsRef.current.offsetTop &&
        scrollPosition < (projectsRef.current?.offsetTop || Infinity)) {
        setActiveSection('skills');
      } else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop &&
        scrollPosition < (contactRef.current?.offsetTop || Infinity)) {
        setActiveSection('projects');
      } else if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
        setActiveSection('contact');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Navigate to resume page
  const navigateToResume = () => {
    window.location.href = '/resume';
  };

  // Navigation items
  const navItems = [
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'skills', label: 'Skills', ref: skillsRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
    { id: 'resume', label: 'Resume', isResumeDownload: true }
  ];

  return (
    <div className="smooth-scroll-container">
      {/* Navigation Bar */}
      <nav className="fixed-nav">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => {
                if (item.isResumeDownload) {
                  navigateToResume();
                } else {
                  scrollToSection(item.ref);
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Consolidated Header Component */}
      {/* <Header /> */}


      {/* Main Content */}
      <div className="sections-container">
        {/* About Section */}
        <motion.section
          ref={aboutRef}
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          className="section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <Skills />
          </Suspense>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          className="section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        </motion.section>

      </div>
    </div>
  );
}

export default App;

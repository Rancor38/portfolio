import React, { useEffect, useState } from 'react';
import GeneratePDF from '../components/GeneratePDF';
import '../styles/Resume.css';
import '../styles/ResumePrint.css';
import { useLocation } from 'react-router-dom';

const Resume = () => {
  // State to hold resume data
  const [resumeData, setResumeData] = useState(null);
  // State to track errors
  const [error, setError] = useState(null);
  // State to track print-friendly mode
  const [isPrintFriendly, setIsPrintFriendly] = useState(false);

  // Get current location to determine if this is a standalone resume page
  const location = useLocation();
  const isStandalonePage = location.pathname === '/resume';

  // Set print-friendly mode and handle PDF generation when opened as standalone page
  useEffect(() => {
    if (isStandalonePage && resumeData) {
      setIsPrintFriendly(true);
      
      // Function to navigate back to the home page
      const navigateToHome = () => {
        window.location.href = '/';
      };
      
      // Show the download prompt
      const shouldDownload = window.confirm('Would you like to download the resume as a PDF?');
      
      if (shouldDownload) {
        // Delay slightly to ensure the content is rendered in print-friendly mode
        setTimeout(() => {
          const generatePDFButton = document.querySelector('.generate-pdf-btn');
          if (generatePDFButton) {
            // Click the PDF button
            generatePDFButton.click();
            
            // Navigate back to home after a delay to allow download to start
            setTimeout(() => {
              navigateToHome();
            }, 1500);
          }
        }, 500);
      } else {
        // If user chooses not to download, navigate back home immediately
        navigateToHome();
      }
    }
  }, [isStandalonePage, resumeData]);

  // Fetch projects and skills data when component mounts
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        // Add a small timeout to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 300));

        // Import resume data without the query parameter that's causing issues
        const resumeModule = await import('../data/resumeData');

        if (!resumeModule || !resumeModule.default) {
          throw new Error("Resume data module is empty or invalid");
        }

        // Get the latest contact data
        const contactDataModule = await import('../data/contactData');

        if (!contactDataModule || !contactDataModule.default) {
          console.warn("Contact data module is empty or invalid, using resume data as is");
        }

        // Create a copy of the resume data
        const updatedResumeData = { ...resumeModule.default };

        // Validate that required sections exist in the data
        if (!updatedResumeData.technicalSkills || !updatedResumeData.projects) {
          console.warn("Resume data is missing required sections, using default data");
        }

        // Update the email from contact data if available
        if (contactDataModule && contactDataModule.default) {
          const contactItems = contactDataModule.default;
          const emailItem = contactItems.find(item => item.label === "Email");

          if (emailItem && emailItem.content) {
            updatedResumeData.contact.email = emailItem.content;
            console.log('Updated email to:', emailItem.content);
          }
        }

        setResumeData(updatedResumeData);
      } catch (error) {
        console.error("Error loading resume data:", error);
        setError("Failed to load resume data. Please try refreshing.");
      }
    };

    fetchResumeData();
  }, []);

  if (error) {
    return (
      <div className="resume-error">
        <div>
          <p>Error: {error}</p>
          <button
            className="refresh-resume-btn"
            onClick={() => {
              setError(null);
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="resume-loading">
        <div>
          <p>Loading resume data...</p>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`resume-container ${isPrintFriendly ? 'print-friendly' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
        {/* Z | H Symbol in a circle */}
        <div style={{
          width: '4.4em',
          height: '4.4em',
          borderRadius: '50%',
          background: '#fff',
          color: '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '2.2em',
          letterSpacing: '0.1em',
          marginRight: '1em',
          border: '2px solid #888',
          boxShadow: '0 1px 4px #0001',
        }}>
          <span style={{ fontWeight: 700, color: '#111' }}>Z</span>
          <span style={{ color: '#111', fontWeight: 700, margin: '0 0.2em' }}>|</span>
          <span style={{ fontWeight: 700, color: '#444' }}>H</span>
        </div>
        {/* Name to the right of the circle */}
        <div className="resume-header" style={{ marginBottom: 0, flex: 1 }}>
          <h1 style={{ marginBottom: 0, fontSize: '1.7em', fontWeight: 700 }}>{resumeData.name}</h1>
        </div>
      </div>
      <div className="resume-columns">
        {/* Sidebar */}
        <div className="resume-column sidebar">
          <section className="resume-title-contact">
            <h3 style={{ marginTop: 0 }}>Title & Contact</h3>
            <div style={{ fontWeight: 600, fontSize: '12pt', marginBottom: '0.5em' }}>{resumeData.title}</div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em' }}>
              <img src={require('../images/phone.png')} alt="Phone" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
              {resumeData.contact.phone}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em' }}>
              <img src={require('../images/email.png')} alt="Email" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
              {resumeData.contact.email}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em', wordBreak: 'break-all' }}>
              <img src={require('../images/github.png')} alt="GitHub" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
              github.com/Rancor38
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em', wordBreak: 'break-all' }}>
              <img src={require('../images/LinkedIn.png')} alt="LinkedIn" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
              in/zakariah-om/
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em', wordBreak: 'break-all' }}>
              <img src={require('../images/portfolio.png')} alt="Portfolio" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
              zakariah.xyz
            </div>
          </section>
          <section className="resume-skills">
            <h3>Technical Skills</h3>
            <div className="skills-category">
              <h4>Languages</h4>
              <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.technicalSkills.languages.join(', ')}</div>
            </div>
            <div className="skills-category">
              <h4>Tools & Frameworks</h4>
              <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.technicalSkills.tools.join(', ')}</div>
            </div>
          </section>
          <section className="resume-expertise">
            <h3>Expertise</h3>
            <div className="expertise-category">
              <h4>Professional</h4>
              <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.expertise.professional.join(', ')}</div>
            </div>
            <div className="expertise-category">
              <h4>Technical</h4>
              <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.expertise.technical.join(', ')}</div>
            </div>
          </section>
          <section className="resume-education">
            <div className="pdf-page-break" style={{ paddingTop: '1.5in' }} />
            <h3>Education</h3>
            <ul className="education-list">
              {resumeData.education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.name}</strong>
                  <span style={{ float: 'right' }}>{edu.year || edu.years}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="resume-interests">
            <h3>Interests</h3>
            <div style={{ fontSize: '10pt' }}>{resumeData.interests.join(', ')}</div>
          </section>
        </div>
        {/* Main Content */}
        <div className="resume-column">
          <section className="resume-summary">
            <h3>Professional Summary</h3>
            <p style={{ fontSize: '10.5pt' }}>{resumeData.summary}</p>
          </section>
          <section className="resume-experience">
            <h3>Professional Experience</h3>
            {resumeData.professionalExperience.map((job, index) => (
              job.company !== 'Starbucks' && (
                <React.Fragment key={index}>
                  <div className="resume-job">
                    <div className="job-header">
                      <p className="job-company" style={{ fontWeight: 600, marginBottom: 0 }}>{job.company} — {job.location}</p>
                      <span className="job-years" style={{ fontSize: '10pt', color: '#555' }}>{job.years}</span>
                    </div>
                    <ul style={{ margin: '0.3em 0', paddingLeft: '1.2em' }}>
                      {job.achievements.map((achievement, i) => (
                        <li key={i} style={{ fontSize: '10.5pt', marginBottom: '0.1em' }}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              )
            ))}
          </section>
          <section className="resume-projects">
            <div className="pdf-page-break" style={{ paddingTop: '1.8in' }} />
            <h3>Projects</h3>
            <div className="projects-grid">
              {/* Show 6 projects in vertical format */}
              {resumeData.projects.slice(0, 6).map((project, index) => (
                <div className="resume-project" key={index} style={{ marginBottom: '0.5em' }}>
                  <div className="project-header">
                    <h4>{project.name}</h4>
                    <span className={`project-type ${project.type.toLowerCase()}`}>{project.type}</span>
                  </div>
                  <ul style={{ margin: '0.3em 0' }}>
                    {project.description.map((desc, i) => (
                      <li key={i} style={{ marginBottom: '0.1em' }}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <GeneratePDF className="generate-pdf-btn" style={{ display: 'none' }} />
    </div>
  );
};

export default Resume;

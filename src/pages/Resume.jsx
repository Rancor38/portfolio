// filepath: /Users/zakariahomara-mezzano/snapDragons/projects/active/portfolio/src/pages/Resume.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DownloadPDF from '../components/DownloadPDF';
import '../styles/Resume.css';
import { useLocation } from 'react-router-dom';

const Resume = () => {
  // State to hold resume data
  const [resumeData, setResumeData] = useState(null);
  // State to track loading status
  const [isRefreshing, setIsRefreshing] = useState(false);
  // State to track errors
  const [error, setError] = useState(null);
  // State to track print-friendly mode
  const [isPrintFriendly, setIsPrintFriendly] = useState(false);

  // Get current location to determine if this is a standalone resume page
  const location = useLocation();
  const isStandalonePage = location.pathname === '/resume';

  // Set print-friendly mode automatically when opened as standalone page
  useEffect(() => {
    if (isStandalonePage) {
      setIsPrintFriendly(true);

      // Add a small delay before triggering print to ensure content is loaded
      const printTimer = setTimeout(() => {
        window.print();
      }, 1500);

      return () => clearTimeout(printTimer);
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
      <div className="resume-header">
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <div className="resume-contact">
          {isPrintFriendly ? (
            // Plain text for print-friendly mode
            <>
              <div>{resumeData.contact.phone}</div>
              <div>{resumeData.contact.email}</div>
              <div>LinkedIn</div>
              <div>GitHub</div>
              <div>Portfolio</div>
            </>
          ) : (
            // Links for normal mode
            <>
              <div><a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a></div>
              <div><a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a></div>
              <div><a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
              <div><a href={resumeData.contact.github} target="_blank" rel="noreferrer">GitHub</a></div>
              <div><a href={resumeData.contact.portfolio} target="_blank" rel="noreferrer">Portfolio</a></div>
            </>
          )}
        </div>
        {isRefreshing && (
          <div className="refresh-indicator">
            Refreshing resume data from portfolio components...
          </div>
        )}
        <div className="resume-actions">
          {!isStandalonePage && (
            <>
              <DownloadPDF />
              <button
                className={`refresh-resume-btn ${isRefreshing ? 'refreshing' : ''}`}
                onClick={async () => {
                  // Set loading state
                  setIsRefreshing(true);
                  setError(null);

                  try {
                    // Clear the module cache to ensure we get fresh data
                    // Note: This approach doesn't use dynamic imports with timestamp parameters
                    // which were causing issues

                    // Wait a moment to give visual feedback that refreshing is happening
                    await new Promise(resolve => setTimeout(resolve, 800));

                    // Re-fetch all data
                    const [resumeModule, contactDataModule] = await Promise.all([
                      import('../data/resumeData'),
                      import('../data/contactData')
                    ]);

                    if (!resumeModule || !resumeModule.default) {
                      throw new Error("Resume data module is empty or invalid");
                    }

                    const updatedResumeData = { ...resumeModule.default };

                    // Update contact info if available
                    if (contactDataModule && contactDataModule.default) {
                      const contactItems = contactDataModule.default;
                      const emailItem = contactItems.find(item => item.label === "Email");

                      if (emailItem && emailItem.content) {
                        updatedResumeData.contact.email = emailItem.content;
                      }
                    }

                    // Update with fresh data
                    setResumeData(updatedResumeData);

                    // Success notification
                    const refreshNotification = document.createElement('div');
                    refreshNotification.className = 'refresh-notification';
                    refreshNotification.textContent = 'Resume data refreshed successfully!';
                    document.body.appendChild(refreshNotification);

                    // Remove notification after 3 seconds
                    setTimeout(() => {
                      refreshNotification.classList.add('fade-out');
                      setTimeout(() => document.body.removeChild(refreshNotification), 500);
                    }, 3000);

                    console.log('Resume data refreshed successfully!');
                  } catch (error) {
                    console.error("Error refreshing resume data:", error);
                    setError("Failed to refresh resume data. Please try again.");
                  } finally {
                    // Clear loading state
                    setIsRefreshing(false);
                  }
                }}
                disabled={isRefreshing}
                aria-label="Refresh Resume Data"
              >
                {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
              </button>
              <button
                className={`print-friendly-btn ${isPrintFriendly ? 'active' : ''}`}
                onClick={() => setIsPrintFriendly(!isPrintFriendly)}
                aria-label="Toggle Print Friendly View"
              >
                {isPrintFriendly ? 'Exit Print View' : 'Print Friendly View'}
              </button>
            </>
          )}
          {isStandalonePage && (
            <>
              <button
                className="print-resume-btn"
                onClick={() => window.print()}
                aria-label="Print Resume"
              >
                Print Resume
              </button>                <button
                className="close-window-btn"
                onClick={() => window.close()}
                aria-label="Close Window"
              >
                Close Window
              </button>
              <a
                href="/"
                className="back-to-portfolio-btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.opener && window.opener.focus();
                  window.close();
                }}
              >
                Back to Portfolio
              </a>
            </>
          )}
        </div>
      </div>

      <section className="resume-summary">
        <h3>Professional Summary</h3>
        <p>{resumeData.summary}</p>
      </section>

      <div className="resume-columns">
        <div className="resume-column">
          <section className="resume-experience">
            <h3>Professional Experience</h3>
            {resumeData.professionalExperience.map((job, index) => (
              <div className="resume-job" key={index}>
                <div className="job-header">
                  <h4>{job.title}</h4>
                  <p className="job-company">{job.company} — {job.location}</p>
                  <p className="job-years">{job.years}</p>
                </div>
                <ul>
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-projects">
            <h3>Projects</h3>
            <div className="projects-grid">
              {resumeData.projects.map((project, index) => (
                <div className="resume-project" key={index}>
                  <div className="project-header">
                    <h4>{project.name}</h4>
                    <span className={`project-type ${project.type.toLowerCase()}`}>{project.type}</span>
                  </div>
                  {!isPrintFriendly ? (
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                      )}
                    </div>
                  ) : (
                    <div className="project-links print-friendly">
                      <span>GitHub</span>
                      {project.live && <span>Live Demo</span>}
                    </div>
                  )}
                  <ul>
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="resume-column sidebar">
          <section className="resume-skills">
            <h3>Technical Skills</h3>
            <div className="skills-category">
              <h4>Languages</h4>
              <ul className="skills-list">
                {resumeData.technicalSkills.languages.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4>Tools & Frameworks</h4>
              <ul className="skills-list">
                {resumeData.technicalSkills.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="resume-expertise">
            <h3>Expertise</h3>
            <div className="expertise-category">
              <h4>Professional</h4>
              <ul className="expertise-list">
                {resumeData.expertise.professional.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="expertise-category">
              <h4>Technical</h4>
              <ul className="expertise-list">
                {resumeData.expertise.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="resume-education">
            <h3>Education</h3>
            <ul className="education-list">
              {resumeData.education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.name}</strong>
                  <span>{edu.year || edu.years}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="resume-interests">
            <h3>Interests</h3>
            <ul className="interests-list">
              {resumeData.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;

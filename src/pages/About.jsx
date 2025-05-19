import { Link } from 'react-router-dom';
import Header from "../components/Header";
import TypeOut from '../components/TypeOut';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [typingDone, setTypingDone] = useState([]);

    // Content for each bullet point
    const bulletPoints = [
        "Hello, welcome to my website! This site is a showcase of a few of the things that I do for work. The menu details a few different pages to look over.",
        <>The <Link to="/skills">skills</Link> page lists the software and development tools that I use the most often, and while it's not a comprehensive list of every tool that I've used in my life, they are the spread of them that I feel confident in.</>,
        <>In <Link to="/projects">projects</Link>, you'll find an array of published applications and other projects that I've been proud to work on.</>,
        <>Resume is a direct link to download my most recent (and hopefully up-to-date) resume.</>,
        <>And <Link to="/contact">Contact Me</Link> has a few ways to reach out/find me online!</>
    ];

    function handleDownload() {
        // Path to the file to be downloaded
        const fileURL = process.env.PUBLIC_URL + "/resumePDF/Zakariah_Software_Developer_Resume.pdf";
        // Create a temporary anchor element
        const downloadLink = document.createElement("a");
        // Set the href attribute to the file's URL
        downloadLink.href = fileURL;
        // Set the download attribute to the file's name
        downloadLink.download = "Zakariah's_Resume.pdf";
        // Append the anchor element to the document body
        document.body.appendChild(downloadLink);
        // Click the download link to start the download
        downloadLink.click();
        // Remove the temporary anchor element
        document.body.removeChild(downloadLink);
        // Open the downloaded file in a new window
        window.open(fileURL, "_blank");
    }

    // Setup staggered reveal of bullet points
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < bulletPoints.length) {
                setVisibleItems(prev => [...prev, currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 1000); // 1 second delay between starting each bullet point typing

        return () => clearInterval(interval);
    }, []);

    // Handler for when typing is complete for a bullet point
    const handleTypingComplete = (index) => {
        setTypingDone(prev => [...prev, index]);
    };

    return (
        <>
            <Header />
            <section className="about-me">
                <h2><TypeOut inputString="About Me" typeSpeed={50} /></h2>
                <main>
                    <AnimatePresence>
                        {bulletPoints.map((content, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: visibleItems.includes(index) ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {visibleItems.includes(index) && (
                                    index === 3 ? (
                                        <>
                                            <TypeOut
                                                inputString="Resume "
                                                typeSpeed={40}
                                                onComplete={() => handleTypingComplete(index)}
                                            />
                                            {typingDone.includes(index) && (
                                                <a href='/' onClick={handleDownload}>is a direct link to download my most recent (and hopefully up-to-date) resume.</a>
                                            )}
                                        </>
                                    ) : (
                                        <TypeOut
                                            inputString={content}
                                            typeSpeed={30}
                                            onComplete={() => handleTypingComplete(index)}
                                        />
                                    )
                                )}
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </main>
            </section>
        </>
    );
};

export default About;
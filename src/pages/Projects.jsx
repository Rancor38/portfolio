import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import TypeOut from '../components/TypeOut';
import { motion } from 'framer-motion';

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            name: "RPG-Dice-React",
            description: "An application for rolling polyhedral dice for tabletop rollplaying games.",
            url: "https://rpg-dice-react.netlify.app/",
            categories: ["web", "frontend"]
        },
        {
            name: "Monster Finder",
            description: "An application for finding monsters to use in your Dungeons & Dragons 5th Edition roleplaying game.",
            url: "https://monsterfinder5e.netlify.app/",
            categories: ["web", "database"]
        },
        {
            name: "Textmagotchi",
            description: "A Tamagotchi-like game for your browser!",
            url: "https://rancor38.github.io/textmagotchi/",
            categories: ["game", "frontend"]
        },
        {
            name: "EZ-Notes",
            description: "An application for saving rich text notes online.",
            url: "https://ez-notes.netlify.app/",
            categories: ["web", "full-stack"]
        },
        {
            name: "DM's Guild Titles",
            description: "A series of booklets published on DM's Guild. (Unavailable on Mobile devices, instead search 'Zakariah')",
            url: "https://www.dmsguild.com/browse.php?author=Zakariah",
            categories: ["writing"]
        },
        {
            name: "Borgbot",
            description: "A do-it-all discord bot that is far too powerful for how silly it is.",
            url: "https://github.com/Rancor38/borgbot/",
            categories: ["utility", "backend"]
        },
        {
            name: "Simple-To-Do",
            description: "A simple rapidly fast to-do application that works without a database.",
            url: "https://rancor38.github.io/simple-to-do/",
            categories: ["web", "frontend", "utility"]
        },
    ];

    // Filter categories
    const categories = ["all", "web", "frontend", "backend", "full-stack", "game", "writing", "utility", "database"];

    // Filtered projects
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.categories.includes(filter));

    useEffect(() => {
        // Reset visible projects when filter changes
        setVisibleProjects([]);

        // Create a staggered reveal animation for projects
        let currentIndex = 0;
        const revealInterval = setInterval(() => {
            if (currentIndex < filteredProjects.length) {
                setVisibleProjects(prev => [...prev, currentIndex]);
                currentIndex++;
            } else {
                clearInterval(revealInterval);
            }
        }, 100);

        return () => clearInterval(revealInterval);
    }, [filteredProjects.length, filter]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="projects">
            <h2 className="section-title">
                <TypeOut inputString="My Projects" typeSpeed={50} />
            </h2>

            {/* Category filter buttons */}
            <div className="filter-container">
                {categories.map(category => (
                    <motion.button
                        key={category}
                        className={`filter-button ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        {filter === category && (
                            <motion.div
                                className="button-underline"
                                layoutId="underline"
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className={`project-wrapper ${visibleProjects.includes(index) ? 'visible' : 'hidden'}`}
                        style={{ "--item-index": index }}
                        variants={childVariants}
                        layoutId={`project-${project.name}`}
                    >
                        <Project
                            name={project.name}
                            description={project.description}
                            url={project.url}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {filteredProjects.length === 0 && (
                <motion.p
                    className="no-projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    No projects found in this category.
                </motion.p>
            )}
        </section>
    );
};

export default Projects;
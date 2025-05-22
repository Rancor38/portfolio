import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import TypeOut from '../components/TypeOut';
import { motion } from 'framer-motion';

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    // Project data is used in the Resume component through projectsData.js
    const projects = [
        // Enterprise AWS Projects - Most Impressive
        {
            name: "LoRaWAN Platform CI/CD Pipeline",
            description: "Architected and implemented a multi-account AWS CDK infrastructure-as-code solution for Amazon's LoRaWAN IoT platform, establishing automated CI/CD pipelines with approval gates that seamlessly deploy across development and production environments.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "aws", "iot", "cdk", "enterprise", "cicd", "cloud"]
        },
        {
            name: "BMS Monitoring Suite for Amazon OpsTech",
            description: "Led development of comprehensive Building Management System (BMS) monitoring measures for all Corp connected OpsTech support buildings at Amazon, creating enterprise solutions that monitor facility infrastructure, improve operational efficiency, and enable proactive maintenance across the global building network.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "utility", "aws", "iot", "data", "cdk", "enterprise"]
        },
        {
            name: "Hardware Installation App",
            description: "A mobile-optimized web application deployed on AWS for field technicians to document and track hardware installations with photo evidence, featuring offline support, image processing, and robust cloud storage using AWS serverless architecture.",
            url: "https://www.amazon.com/b2b",
            categories: ["web", "full-stack", "backend", "utility", "mobile", "aws", "enterprise"]
        },
        {
            name: "Device Health App",
            description: "A web application deployed on AWS for monitoring and managing IoT devices, featuring real-time health status tracking for LoRaWAN sensors and gateways. Built with React, Python Lambda, and AWS CDK.",
            url: "https://www.amazon.com/b2b",
            categories: ["web", "full-stack", "backend", "utility", "aws", "iot", "enterprise"]
        },
        {
            name: "Wirefree Gateway Health Dashboard",
            description: "AWS CDK solution that monitors LoRaWAN gateway connectivity for Amazon's Corp connected OpsTech support facilities, providing real-time visibility into building management systems across the global infrastructure and enabling timely issue detection through automated health snapshots and visual analytics.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "utility", "aws", "iot", "data", "cdk", "enterprise"]
        },
        {
            name: "LoRaWAN Device Health Dashboard",
            description: "Enterprise AWS solution for monitoring IoT sensor networks throughout Amazon's global OpsTech support buildings, creating automated snapshots of building management system health metrics and enabling facilities teams to maintain optimal operational conditions through comprehensive visual dashboards.",
            url: "https://www.amazon.com/b2b",
            categories: ["backend", "utility", "aws", "iot", "data", "enterprise"]
        },

        // Professional Web Applications - Highly Impressive
        {
            name: "Aqueduct",
            description: "A complex web-based tool for data flow management and visualization.",
            url: "https://milvian.group/aqueduct/",
            categories: ["web", "frontend", "full-stack"]
        },

        // Notable Personal Projects - Moderately Impressive
        {
            name: "EZ-Notes",
            description: "An application for saving rich text notes online.",
            url: "https://ez-notes.netlify.app/",
            categories: ["web", "full-stack"]
        },
        {
            name: "Monster Finder",
            description: "An application for finding monsters to use in your Dungeons & Dragons 5th Edition roleplaying game.",
            url: "https://monsterfinder5e.netlify.app/",
            categories: ["web", "database"]
        },
        {
            name: "Borgbot",
            description: "A do-it-all discord bot that is far too powerful for how silly it is.",
            url: "https://github.com/Rancor38/borgbot/",
            categories: ["utility", "backend"]
        },

        // Smaller Fun Projects - Interesting but Less Complex
        {
            name: "DM's Guild Titles",
            description: "A series of booklets published on DM's Guild. (Unavailable on Mobile devices, instead search 'Zakariah')",
            url: "https://www.dmsguild.com/browse.php?author=Zakariah",
            categories: ["writing"]
        },
        {
            name: "Textmagotchi",
            description: "A Tamagotchi-like game for your browser!",
            url: "https://rancor38.github.io/textmagotchi/",
            categories: ["game", "frontend"]
        },
        {
            name: "RPG-Dice-React",
            description: "An application for rolling polyhedral dice for tabletop rollplaying games.",
            url: "https://rpg-dice-react.netlify.app/",
            categories: ["web", "frontend"]
        },
        {
            name: "Simple-To-Do",
            description: "A simple rapidly fast to-do application that works without a database.",
            url: "https://rancor38.github.io/simple-to-do/",
            categories: ["web", "frontend", "utility"]
        },
    ];

    // Filter categories
    const categories = ["all", "web", "frontend", "backend", "full-stack", "game", "writing", "utility", "database", "mobile", "aws", "iot", "data", "cdk", "enterprise", "cicd", "cloud"];

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
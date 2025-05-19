import React from 'react';
import TypeOut from './TypeOut';
import { motion } from 'framer-motion';

const Project = ({ name, description, url }) => {
    return (
        <motion.div
            className="project"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <h3>{name}</h3>
            <p>
                <TypeOut inputString={description} typeSpeed={30} />
            </p>
            <motion.a
                href={url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(138, 43, 226, 0.4)" }}
                whileTap={{ scale: 0.95 }}
            >
                View Project
            </motion.a>
        </motion.div>
    );
};

export default Project;
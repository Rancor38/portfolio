import React from 'react';
import TypeOut from './TypeOut';
import { motion } from 'framer-motion';

const Project = ({ name, description, url }) => {
    const estimatedHeight = Math.max(300, Math.ceil(description.length / 50) * 24 + 150);

    return (
        <motion.div
            className="project"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minWidth: 0,
                maxWidth: '100%',
                minHeight: `${estimatedHeight}px`
            }}
        >
            <motion.h3>{name}</motion.h3>
            <motion.p>
                <TypeOut inputString={description} typeSpeed={30} />
            </motion.p>
            <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: 'auto', alignSelf: 'center' }}
            >
                View Project
            </motion.a>
        </motion.div>
    );
};

export default Project;
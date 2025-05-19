import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="loading-container">
            <motion.div
                className="loading-spinner"
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Loading...
            </motion.h2>
        </div>
    );
};

export default Loading;
import React from 'react';
import { motion } from 'framer-motion'

const ResumeDownloadAsPdf = () => {
    return (
        <motion.button className='googleDocsButton'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
        >
            <a
                href='https://docs.google.com/document/d/1JrDCmKNbBJ2uoZ2S8fOe4_JDVXheOExbX3n62dp54wI/edit?usp=sharing' target="_blank" rel='noreferrer'
            >
                <h6>View in Google Docs
                </h6>
            </a>
        </motion.button>
        
    );
};

export default ResumeDownloadAsPdf;
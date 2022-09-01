import React from 'react';
import html from './logos/html-5.svg'
import css from './logos/css-3.svg'
import js from './logos/javascript.svg'
import { motion } from 'framer-motion'

const BioTech = () => {
    return (
        <ul>
            <motion.li whileHover={{ scale: 1.01 }} >
                <img src={html} alt='html-5'/>
            </motion.li>
            <motion.li whileHover={{ scale: 1.01 }} >
                <img src={css} alt='css-3'/>
            </motion.li>
            <motion.li whileHover={{ scale: 1.01 }} >
                <img src={js} alt='JavaScript'/>
            </motion.li>
        </ul>
    );
};

export default BioTech;
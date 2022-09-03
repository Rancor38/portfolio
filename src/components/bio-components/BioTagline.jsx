import React from 'react';
import { motion } from 'framer-motion'

const BioTagline = () => {

    const routMe = () => {
        window.open('https://generalassemb.ly/')
    }

    return (
        <h5>
            Hello! I'm Zakariah! I'm a creative soul that loves building things, and I recently learned software engineering at <motion.button className='GA' whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }} onClick={routMe}>General Assembly!</motion.button>
            </h5>
    );
};

export default BioTagline;
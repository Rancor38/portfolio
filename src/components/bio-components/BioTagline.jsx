import React from 'react';
import { motion } from 'framer-motion'

const BioTagline = () => {

    const routMe = () => {
        window.open('https://generalassemb.ly/')
    }

    return (
        <span className='bioTagline'>
            <h5>
                Hello! I'm Zakariah! I'm a creative soul that loves building things, and I learned software engineering at <motion.button className='GA' whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }} onClick={routMe}>General Assembly!</motion.button>
            </h5>
            <img className='avatar' src='https://avatars.githubusercontent.com/u/105610124?v=4' alt='zakariah' />
        </span>
    );
};

export default BioTagline;
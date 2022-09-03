import React from 'react';
import { motion } from 'framer-motion'

const LogoProjectsResume = () => {
    return (
        <div className='logoProjectResume'>
            <a className='menuButton' href='/'> <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src='https://raw.githubusercontent.com/Rancor38/portfolio/68e574bee7bb8b305934fea7cc55414c037bd944/public/logos/Z-Logo.png?raw=true' alt='Z-logo' /> </a>
                {/* <a className='menuButton' href='/'> <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >Bio</motion.h1> </a> */}
            <a className='menuButton' href='/projects'> <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >Projects</motion.h1> </a>
            <a className='menuButton' href='/resume'> <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >Resume</motion.h1> </a>
        </div>  
    );
};

export default LogoProjectsResume;
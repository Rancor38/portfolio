import React from 'react';
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <>
            {/* <h1 id='title'>Zakariah O'Mara-Mezzano</h1> */}
            <header>
                <a className='menuButton' href='/'> <motion.img className='logo'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        src='https://github.com/Rancor38/portfolio/blob/main/public/logos/Z-Logo.png?raw=true' alt='Z-logo'/> </a>
                <a className='menuButton' href='/'> <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >Bio</motion.h1> </a>
                <a className='menuButton' href='/projects'> <motion.h1
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >Projects</motion.h1> </a>
                <a className='menuButton' href='/resume'> <motion.h1
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >Resume</motion.h1> </a>
                </header>
        </>
    );
};

export default Header;
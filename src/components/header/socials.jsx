import React from 'react';
import { motion } from 'framer-motion'

const socials = () => {
    return (
        <div className='socials'>
            <motion.a whileHover={{ scale: 1.25 }}  href='https://www.linkedin.com/in/zakariah-om' target="_blank">
                <img
                    className='social' src='https://github.com/Rancor38/portfolio/blob/main/public/socials/iconmonstr-linkedin-3-240.png?raw=true' alt='linkedIn' />
                 </motion.a>
            <motion.a whileHover={{ scale: 1.25 }}  href='https://github.com/Rancor38' target="_blank">
                <img
                    className='social' src='https://github.com/Rancor38/portfolio/blob/main/public/socials/iconmonstr-github-1-240.png?raw=true' alt='github' />
                 </motion.a>
        </div>
    );
};

export default socials;
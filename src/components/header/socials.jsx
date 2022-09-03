import React from 'react';
import { motion } from 'framer-motion'

const socials = () => {
    return (
        <>
            <motion.a whileHover={{ scale: 1.25 }}  href='www.linkedin.com/in/zakariah-om' target="_blank">
                <img
                    className='social' src='' alt='linkedIn' />
                 </motion.a>
            <motion.a whileHover={{ scale: 1.25 }}  href='https://github.com/Rancor38' target="_blank">
                <img
                    className='social' src='' alt='github' />
                 </motion.a>
        </>
    );
};

export default socials;
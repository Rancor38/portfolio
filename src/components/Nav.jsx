import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DownloadPDF from './DownloadPDF';

const Nav = ({ handler }) => {
    const location = useLocation();

    // Check if the current path matches the link
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <motion.ul
            className="navBar"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Link to='/'>
                <motion.li
                    className={isActive('/') ? 'active' : ''}
                    onClick={handler}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    About Me
                    {isActive('/') && (
                        <motion.div
                            className="active-indicator"
                            layoutId="activeIndicator"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </motion.li>
            </Link>
            <Link to='/skills'>
                <motion.li
                    className={isActive('/skills') ? 'active' : ''}
                    onClick={handler}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Skills
                    {isActive('/skills') && (
                        <motion.div
                            className="active-indicator"
                            layoutId="activeIndicator"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </motion.li>
            </Link>
            <Link to='/projects'>
                <motion.li
                    className={isActive('/projects') ? 'active' : ''}
                    onClick={handler}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Projects
                    {isActive('/projects') && (
                        <motion.div
                            className="active-indicator"
                            layoutId="activeIndicator"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </motion.li>
            </Link>
            <motion.li
                onClick={() => {
                    window.open('/resume', '_blank');
                    if (handler) handler();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
            >
                Resume
            </motion.li>
            <DownloadPDF handler={handler} />
            <Link to='/contact'>
                <motion.li
                    className={isActive('/contact') ? 'active' : ''}
                    onClick={handler}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Me
                    {isActive('/contact') && (
                        <motion.div
                            className="active-indicator"
                            layoutId="activeIndicator"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </motion.li>
            </Link>
        </motion.ul>
    );
};

export default Nav;
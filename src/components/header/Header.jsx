import React from 'react';
import { motion } from 'framer-motion'
import Socials from './Socials';
import LogoProjectsResume from './LogoProjectsResume';

const Header = () => {
    return (
        <header>
            <LogoProjectsResume />
            <Socials />
        </header>
            
        
    );
};

export default Header;
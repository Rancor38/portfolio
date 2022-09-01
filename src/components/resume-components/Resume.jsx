import React from 'react';
import PersonalSkills from './PersonalSkills';
import ResumeExperience1 from './ResumeExperience1';
import ResumeExperience2 from './ResumeExperience2';
import ResumeExperience3 from './ResumeExperience3';
import ResumeTitleAndLocation from './ResumeTitleAndLocation';
import TechnicalSkills from './TechnicalSkills';
import { motion } from 'framer-motion'

const Resume = () => {
    return (
        <motion.div whileHover={{ scale: 1.01 }}className='resume'
        >
            <ResumeTitleAndLocation/>
            <ResumeExperience1 />
            <ResumeExperience2 />
            <ResumeExperience3 />
            <div className='technicalAndPersonalSkills'>
                <TechnicalSkills />
                <PersonalSkills />
            </div>
        </motion.div>
    );
};

export default Resume;
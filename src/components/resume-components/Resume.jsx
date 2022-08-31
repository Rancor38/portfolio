import React from 'react';
import PersonalSkills from './PersonalSkills';
import ResumeExperience1 from './ResumeExperience1';
import ResumeExperience2 from './ResumeExperience2';
import ResumeExperience3 from './ResumeExperience3';
import ResumeTitleAndLocation from './ResumeTitleAndLocation';
import TechnicalSkills from './TechnicalSkills';

const Resume = () => {
    return (
        <div className='resume'>
            <ResumeTitleAndLocation/>
            <ResumeExperience1 />
            <ResumeExperience2 />
            <ResumeExperience3 />
            <div className='technicalAndPersonalSkills'>
                <TechnicalSkills />
                <PersonalSkills />
            </div>
        </div>
    );
};

export default Resume;
import React from 'react';
// import aws from '../../../public/logos/aws-elastic-beakstalk.svg'
// import css from './logos/css-3.svg'
// import django from './logos/django-icon.svg'
// import express from './logos/express.svg'
// import html from './logos/html-5.svg'
// import javascript from './logos/javascript.svg'
// import jira from './logos/jira.svg'
// import mysql from './logos/mysql-icon.svg'
// import mongodb from './logos/mongodb-icon.svg'
// import node from './logos/nodejs-icon.svg'
// import postgresql from './logos/postgresql.svg'
// import postman from './logos/postman-icon.svg'
// import python from './logos/python.svg'
// import react from './logos/react.svg'

import techObject from './logoObjects/logos.js'

import { motion } from 'framer-motion'

const BioTech = () => {

    const eachTech = []
    const findEachTech = (techObject) => {
        for (let i = 0;
            i < techObject.length;
            i += 1) {
            eachTech.push(techObject[i])
            }
    }

    return (
        <ul className='bioTech'>
            {findEachTech(techObject)}
            {console.log(eachTech)}
            {eachTech.map((logo) => (
                <motion.a whileHover={{ scale: 1.25 }}  href={logo.learnMore} target="_blank">
                <img
                        className='logo' src={logo.logo} alt={logo.name} />
                    {/* <p className='logo hidden-until-hover'>{ logo.name }</p> */}
                </motion.a>
            ))}
        </ul>
    );
};

export default BioTech;
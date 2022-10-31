import React from 'react';
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
import React from 'react';
import BioTagline from './BioTagline';
import { motion } from 'framer-motion'
import BioTech from './BioTech';

const Bio = () => {
    return (
        <motion.article whileHover={{ scale: 1.01 }} className='article'>
            <BioTagline />
            <p>
                For years, while working in food service to make ends meet, friends tried to convince me to get into tech. They all told me it would be tough to make the change, but that it’d be worth it. So I signed up for General Assembly, and that, is where I find myself today, and I’m having a blast knowing that the best of times are yet ahead.
            <br></br>
            I've been building sites with the following tools, and having a lot of fun.
            </p>
            {/* <p>
              HTML | CSS | JavaScript | APIs | Postman | Node | Express | GitHub | Django | SQL | Python | React | Microsoft Office Suite | Google Docs, Drive, and Sheets | Jira  
            </p> */}
            <BioTech />
        </motion.article>
    );
};

export default Bio;
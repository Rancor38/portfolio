import React, { useState } from 'react';
import { images } from './imageObjects/image-data';
import { AnimatePresence, motion } from 'framer-motion'
import './styles.css'

const Slideshow = () => {

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextStep = () => {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index+1)
  }

  const prevStep = () => {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index-1)
  }

  return (
    <div className="container">
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
            
          <motion.a
            // variants={variants}
            // animate='animate'
            // initial='initial'
            // exit='exit'
            // key={images[index]}
            // custom={direction}
            href={images[index].url}
            target='_blank'
            rel='noreferrer'>
            <motion.img
              whileHover={{ scale: 1.01 }}
                  src={images[index].image}
                  alt="slides"
                  className="slides"
              />
              </motion.a>
          
          </AnimatePresence>
        <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className='prevButton slideShowButton' onClick={prevStep}>◀️</motion.button>
        <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className='nextButton slideShowButton' onClick={nextStep}>▶️</motion.button>
    </div>
</div>
  );
};

export default Slideshow;
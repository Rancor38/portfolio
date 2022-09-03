import React, { useState } from 'react';
import { images } from './image-data';
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  intial: direction => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    trasition: {
      x: { type: 'spring', stiffness: 300, damping: 20},
      opacity: { duration: 0.2 },
    }
  },
  exit: direction => {
    return {
      x: direction >0 ? -200 : 200,
      opacity: 0,
      trasition: {
        x: { type: 'spring', stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 }
      }
    }
  },
}

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
          <motion.div variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            key={images[index]}
            custom={direction}>
              <a href={images[index].url} target='_blank' rel='noreferrer'>
                <img
                  src={images[index].image}
                  alt="slides"
                  className="slides"
              />
              </a>
          </motion.div>
          
          </AnimatePresence>
        <button className='prevButton' onClick={prevStep}>◀️</button>
        <button className='nextButton' onClick={nextStep}>▶️</button>
    </div>
</div>
  );
};

export default Slideshow;
import React from 'react';
import './Testimonials.css'
import testimonialsData from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const transition = {
        type: 'tween', 
        duration: 3,
    }
    const tLength = testimonialsData.length
    const [number, setNumber] = useState(0)

    function add(){
        return number === tLength - 1 ? setNumber(0) : setNumber(x => x + 1)
    }
    function minus(){
        return number === 0 ? setNumber(tLength - 1) : setNumber(x => x -1)
    }

    return(
        <div className="testimonials">
            <div className='first'>
                <span>Testimonials</span>
                <span className="stroke--text last--strokes">
                    what they
                </span>
                <span className='bold--text'>SAY ABOUT US</span>
                <motion.span
                    key={number}
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 100}}
                    transition={transition}
                >{testimonialsData[number].review}</motion.span>
                <span>
                    <span>
                        <span>{testimonialsData[number].name} - </span>
                        <span>{testimonialsData[number].status}</span>
                    </span>
                </span>
            </div>
            <div className='second'>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={transition}
                ></motion.div>
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={transition}
                ></motion.div>
                <motion.img 
                    src={testimonialsData[number].image} 
                    alt="testimonial image"
                    key={number}
                    initial={{opacity: 0, x: 100}} 
                    animate={{opacity: 1, x: 0}} 
                    exit={{opacity: 0, x: -100}}
                    transition={{...transition, duration: 2}} 
                />

                <span className='test--arrows'>
                        <img 
                            onClick={minus}
                            src={leftArrow} 
                            alt="left arrow" 
                        />
                        <img 
                            onClick={add} 
                            src={rightArrow} 
                            alt="right arrow" 
                        />
                    </span>
            </div>
        </div>
    )
};

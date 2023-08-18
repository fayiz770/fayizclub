import React from 'react';
import './Hero.css'
import '../../styles/right--h.css';
import Header from '../Header/Header';
import heart from '../../assets/heart.png';
import heroImage from '../../assets/hero_image.png';
import heroImageBack from '../../assets/hero_image_back.png';
import calory from '../../assets/calories.png'
import { motion } from 'framer-motion';

const Hero = () => {

    const transation = {type: 'spring', duration: 2}

    return(
        <div className="hero">
            {/* The left side */}
            <div className="blure hero--blure"></div>
            
            <div className="left--h">
                <Header />
                <div className="the--best--ad">
                    <motion.div
                        initial = {{left: '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transation, type: 'tween'}}
                    ></motion.div>
                    <span>the best fitness club in the world</span>
                </div>
                {/* Heading hero */}
                <div className="hero--text">
                    <div>
                        <span className='stroke--text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* Figures section */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* buttons section */}
                <div className='hero--buttons'>
                    <button className="btn">get started</button>
                    <button className="btn">learn more</button>
                </div>
            </div>
            {/* The right side */}
            <div className="right--h">
                <button className="btn">Join Now</button>
                <motion.div className="heart"
                    initial = {{right: '-1rem'}}
                    whileInView={{right: '4rem'}}
                    transition={transation}
                >
                    <img src={heart} alt='heart' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img 
                    src={heroImage} 
                    alt="heroImage" 
                    className="hero--image" 
                />
                <motion.img
                    initial={{right: '11rem'}}
                    whileInView={{right: '20rem'}} 
                    transition={transation}
                    src={heroImageBack} 
                    alt="heroImageBack" 
                    className="hero--image--back" 
                />
                {/* calory section */}
                <motion.div 
                    className="hero--calory"
                    initial={{right: '37rem'}}
                    whileInView={{right: '28rem'}}
                    transition={transation}
                >
                    <img 
                        src={calory} 
                        alt="calory"
                        className='hero--calory--image' 
                    />
                    <div className="calory--text">
                        <span className="first--spans">Calories</span>
                        <span className="first--spans">burned</span>
                        <span className="second--spans">220</span>
                        <span className="second--spans">kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Hero
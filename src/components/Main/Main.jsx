import React from 'react';
import './Main.css'
import rightArrow from '../../assets/rightArrow.png'
import { programsData } from '../../data/programsData';

export default function Main() {
    const programsCard = programsData.map((program) => {
        return(
        <div key={program.key}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <span className='compound--link'>
                <span>Join Now</span>
                <img className='arrow--image' src={rightArrow} alt="right arrow" />
            </span>
        </div>
        )
    }) 
    return(
        <div className="main">
            <div className="text">
                <span className='stroke--text'>explore our</span>
                <span>programs</span>
                <span className='stroke--text'>to share you</span>
            </div>
            <div className="main--cards cards">
                {programsCard}
            </div>
        </div>
    )
};

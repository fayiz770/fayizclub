import React from 'react';
import './Plans.css'
import plansData from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import arrowRight from '../../assets/rightArrow.png'

export default function Plans() {
    const cards = plansData.map((card) => {
        return(
            <div className="card">
                {card.icon} 
                <span>{card.name}</span>
                <span className="bold--text">$ {card.price}</span>
                <span className='tick'>
                    <img src={whiteTick} alt="" className="span--image" />
                    <span>{card.features[0]}</span>
                </span>
                <span className='tick'>
                    <img src={whiteTick} alt="" className="span--image" />
                    <span>{card.features[1]}</span>
                </span>
                <span className='tick'>
                    <img src={whiteTick} alt="" className="span--image" />
                    <span>{card.features[2]}</span>
                </span>
                <div className="compound--link">
                    <span>See more benefits</span>
                    <img className='arrow--image' src={arrowRight} alt="" />
                </div>
                <button className='btn'>Join Now</button>
            </div>
        )
    })
    return(
        <div className="plans">
            <div className="blure"></div>
            <div className="blure"></div>
            <div className="text">
                <span className='stroke--text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke--text'>now withus</span>
            </div>
            <div className="plan--cards cards">
                {cards}
            </div>
        </div>
    )
};

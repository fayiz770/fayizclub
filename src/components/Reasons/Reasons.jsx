import React from 'react';
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import adidas from '../../assets/adidas.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'

export default function Reasons() {
    return(
        <div className="reasons">
            <div className='pics'>
                <div className='leftDiv'>
                    <img className='image1' src={image1} alt="image1" />
                </div>
                <div className='rightDiv'>
                    <div className='topDiv'>
                        <img className='image2' src={image2} alt="image2" />
                    </div>
                    <div className='buttomDiv'>
                        <img className='image3' src={image3} alt="image3" />
                        <img className='image4' src={image4} alt="image4" />
                    </div>
                </div>
            </div>
            <div className='lists'>
                <span>some reasons</span>
                <span>
                    <span className='last--strokes stroke--text list--heading'>why </span>
                    <span className='bold--text'>choose us?</span>
                </span>
                <ul className='list'>
                    <li className='tick'>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </li>
                    <li className='tick'>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </li>
                    <li className='tick'>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </li>
                    <li className='tick'>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </li>
                </ul>
                <span className='partner'>our partners</span>
                <div className='brand'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
};

import React from 'react';
import './Join.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
export default function Join() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('fayizooo', 'fayizoooTemp', form.current, 'ZPPCPxQu5OYUHtAX_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="join">
            <div className="left--j">
                <hr />
                <div>
                    <span className='stroke--text last--strokes'>ready to </span>
                    <span className='bold--text'>level up</span>
                </div>
                <div>
                    <span className='bold--text'>your body</span>
                    <span className='stroke--text  last--strokes'> with us</span>
                </div>
            </div>
            <div className="right--j">
                <form onSubmit={sendEmail} ref={form} className='email--container'>
                    <input type="email" name='user--email' placeholder='Enter your email'/>
                    <button className="btn btn--j">Join now</button>
                </form>
            </div>
        </div>
    )
};

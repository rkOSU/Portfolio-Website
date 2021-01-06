import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import '../App.css';
function HeroSection() {
    return (
        <div className='hero-container' id='hero'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Raj Rohan Kondaveeti</h1>
            <p>4th Yr. Computer Science and Engineering Student</p>
            <p>Ohio State University</p>
            <div className="hero-btns">
               <Link className="button" to={{ pathname: 'https://drive.google.com/file/d/1YlouZqVp78ZMDiDE4llbubUdo-tjKjQm/view?usp=sharing' }} target="_blank">
                Resume
                </Link>
                &nbsp;&nbsp;&nbsp;
               <Link className="button" to={{ pathname: 'https://cardurl.com/bb68359e' }} target="_blank">
                Contact Me
               </Link>
               
                
            </div>
            
            
        </div>
    )
}

export default HeroSection

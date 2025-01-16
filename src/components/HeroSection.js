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
            <h2>Software Engineer</h2>
            <h2>Ex-General Motors</h2>
            <h3>MS in Computer Science Candidate at Georgia Institute of Technology</h3>
            <h3>BS in Computer Science and Engineering with AI Specialization from Ohio State University</h3>
            <div className="hero-btns">
               <Link className="button" to={{ pathname: 'https://drive.google.com/file/d/1YlouZqVp78ZMDiDE4llbubUdo-tjKjQm/view?usp=sharing' }} target="_blank">
                Resume
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link className="button" to={{ pathname: 'https://drive.google.com/file/d/1O5B2e6Tua-1DE_JLHbtDFM9UoD20XU3V/view?usp=sharing' }} target="_blank">
                CV
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

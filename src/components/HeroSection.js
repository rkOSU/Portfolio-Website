import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Raj Rohan Kondaveeti</h1>
            <p>4th Yr. Computer Science and Engineering Student</p>
            <p>Ohio State University</p>
            <div class="hero-btns">
                 <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >Resume</Button> 
                 <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >Contact Me</Button> 
                
            </div>
            
            
        </div>
    )
}

export default HeroSection

import React from 'react'
import './About.css';
import picture from './pic.PNG'


function About() {
    return (
        <div className='about' id='about'>
            <h1>About Me</h1>
                <div className='about__container'>
                    <div className='img__container'> <img src = {picture} alt="Picture of Me" /> </div>
                    <div className='content__container'>
                    <p>Hey there! I'm Raj and I love spending time in nature
                        and going backpacking whenever I can scrape up the time. A few years back, I chose to specialize in artificial intelligence
                        and have found the classes in this track to be very interesting. For that reason, I wish
                        to venture into software development which incorporates topics such as machine learning
                        and neural networks. </p>
                    <p>Apart from that, I also find agriculture very interesting and often think about the integration of
                        it with technology. In fact, the picture on the left is from an agriculture service trip I took to Uruguay
                        over a winter break! Feel free to contact me if you would like to get in touch.
         
                    </p>
                    </div>
                </div>
        </div>
        
    )
}

export default About

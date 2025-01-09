import React from 'react'
import './Hero.css'
import profile_img from '../../assets/dhaya_prof.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/Dhayanithi_Resume_Fullstack.pdf'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Dhayanithi K,</span> Java Fullstack Developer in Chennai.</h1>
            <p>I'm a Java Fullstack Developer. And I'm a fresher with basic knowledge about Fullstack Development. </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                 <div className="hero-resume"><a href={Resume} rel='noopener noreferer' target='blank'>My Resume</a></div>
            </div>
        </div>
    )
}

export default Hero

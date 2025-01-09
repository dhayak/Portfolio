import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/dhaya_about.jpeg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Fresher Fullstack Developer with over a decade of professional expertise in the field. Throughout my career,I have the previllage of collaborating with prestigious organizations, contributing to their success and growth. </p>
                        <p>My passion for Fullstack Development is not only reflected in my extensive experience but also in the enthuasiasm and dedication I bring to each projecy.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"55%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"52%"}}/></div>
                        <div className="about-skill"><p>Spring</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Spring Boot</p><hr style={{width:"45%"}}/></div>
                        <div className="about-skill"><p>Hibernate</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"55%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Fresher</h1>
                    <p>Looking for a job</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>Sample Projects Completed</p>
                </div>
            </div>
        </div>
    )
}

export default About

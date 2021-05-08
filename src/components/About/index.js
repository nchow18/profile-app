import React from 'react';
import Photo from '../../assets/profile.JPG'

function About() {
    return (

            <section id="about-me">
                <div className="page-blur">
                    <div className="page-display">
                        <div className="about-me-container">
                            <h1>About Me</h1>
                            <span>My name is Nathan. I recently started the dive into coding, in the hopes of learning the back, front and full stack developing. The journey so far has brought me with a few designed projects that will showcase my skills and abilities. Please enjoy and have fun!</span>
                        </div>
                        <div className="about-picture-container">
                            <img className="profile-img" alt="Nathan" src={Photo} width="400" height="500"></img>
                        </div>
                    </div>

                </div>
                <div id="background-img3"></div>
            </section>


        
    )
}

export default About;
import React from 'react';
import aboutImg from '../../images/IMG_1517.jpg';

function About () {
    return (
        <section>
            <h2>About</h2>
            <h3>Sarah Jacobs</h3>
            <img
            src={aboutImg}
            className="p-2"
            style={{ width: "20%" }}
            alt="cover"
          ></img>
            <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
            My name is Sarah Jacobs and I'm a Software Engineer with a background 
            in communication and digital media. I'm currently seeking roles in Software 
            Engineering, Web Development, and more. Through my bootcamp at Georgia Tech,
            I've learned and used languages including JavaScript, HTML, CSS, SQL,
            MongoDB, Express, React and Node.js. 
            <br></br>
            <br></br>Take a look at my projects tab to see more of the projects I've 
            worked on, then head over to the contact page so we can connect!👩🏻‍💻
          </h6>
            
        </section>
    )
}
export default About;
import React from 'react';
import camilleImage from '../../assets/profile.jpg'

function About (){
    return(
        <section>
            
            <h1 className='h1-tag'>About Me...</h1>
            <div className='about-div'>
            <img src={camilleImage} className="my-2 about-meimg" alt='me' />
            <p className="about-me">Hello! My name is Camille Howe and I am a restaurant worker turned Full Stack Web Developer and recent graduate of the 
            UW Extended Campus Coding Bootcamp. I started this journey as a way to challenge myself by trying something new while also securing a meaningful and rewarding job! 
            Although I'm less than a year into my coding journey, my accomplishment of finishing the bootcamp has shown me that I can set and accomplish
            my goals. The bootcamp has given me experience with HTML, CSS, JavaScript, Node.js, Express.js, React.js, SQL and NoSQL databases. 
            As I continue to grow as a developer I hope to expand this list and hone my skills even further! 
            <br></br>
            <br></br>
            In my free time, I enjoy hunting for mushrooms out in nature, making jewelry with my partner, cooking, drawing, giving stick-n-poke
            tattoos to my friends, and watching movies. I also love to collaborate on code projects with friends and past classmates as working with others
             teaches me so much! I hope to have the opportunity to collaborate with a team in a professional job setting and learn from them
            while also lending my skills to others. </p>
            </div>
        </section>
    );

}

export default About;
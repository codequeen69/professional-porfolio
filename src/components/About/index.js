import React from 'react';
import camilleImage from '../../assets/profile.jpg'

function About (){
    return(
        <section>
            
            <h1 className='h1-tag'>Allow Me to Introduce Myself...</h1>
            <div>
            <img src={camilleImage} className="my-2 about-meimg" alt='me' />
            <p className="about-me">Hello! My name is Camille Howe and I am a recent graduate of the 
            UW Extensions coding bootcamp which makes me a very new full-stack web developer. Although I'm less than a year 
            into my coding journey, my accomplishment of finishing the bootcamp has shown me that I can set and accomplish
            my goals. The bootcamp has given me experience with HTML, CSS, JavaScript, Node.js, Express.js, React.js, SQL and NoSQL databases. 
            I feel confident that I would be an asset to any web development team! Thanks for stopping by! </p>
            </div>
        </section>
    );

}

export default About;
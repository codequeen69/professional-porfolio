import React from 'react';

function Resume() {
    const resumepdf = require('../../assets/resume-2022.docx')
    return (
        <section>
            <p>View and Dowload my <span><a href={resumepdf} target='blank'>Resume</a></span></p>
            <h1>My Proficiencies:</h1>
            <ul>
            <h2>Front End:</h2>
            <li>HTML</li>
            <li>CSS</li>
           <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
           <li>Bootstrap</li>

            <h2>Backend:</h2>
            <li>APIs</li>
           <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>Sequelize</li> 
            <li>MongoDB</li>
            <li>Mongoose</li>
            </ul>
        </section>
    );
}

export default Resume;
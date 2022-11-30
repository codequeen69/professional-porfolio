import React, { useState } from 'react';
import Project from '../Project';

function Portfolio(props) {
    const [isProjectOpen, setIsProjectOpen ] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
            id: 1,
            name: 'Run Buddy',
            description:"Run Buddy was the first project I ever completed in bootcamp. It was made with HTML and CSS. I can remember how overwhelming this first project felt. It's exciting to look back on it now with so much more knowledge and confidence under my belt.",
            github: "https://github.com/codequeen69/run-buddy.git",
            site: "https://codequeen69.github.io/run-buddy/"
        },
        {
            id: 2,
            name: "Password Generator",
            description:"Password Generator was one of our early projects where we first encorporated JavaScript into a front end application. If/else statements and simple functions felt so foreign and new but have not become the foundation of my code.",
            github: "https://github.com/codequeen69/Password-producer.git",
            site: "https://codequeen69.github.io/Password-producer/"
        },
        {
            id: 3,
            name: "Schedule My Day",
            description:"This was one of the first projects where we stored informatin with local storage. This project was made with HTML, CSS, JavaScript, and Moment.js",
            github: "https://github.com/codequeen69/schedule-my-day.git",
            site:"https://codequeen69.github.io/schedule-my-day/"

        },
        {
            id: 4,
            name: "My Weather App",
            description:  "This weather app allows the user to enter a city into the search bar which then brings up the weather for that city. Made with JavaScript, Moment.js, and Bootstrap.",
            github: "https://github.com/codequeen69/my-weather-app.git",
            site: "https://codequeen69.github.io/my-weather-app/"
        },
        {
            id:5,
            name: "Take Note!",
            description:"This project was one of our first projects using a backend server and API routes by encorporating Node.js and Express.js. This was the first time we used routes to get, add, and delete a note.",
            github: "https://github.com/codequeen69/take-note.git",
            site:"https://warm-plateau-67956.herokuapp.com/notes"
        },
        {
            id: 6,
            name:"iReadIt",
            description:"This was my second group project of bootcamp. IReadIt is an online book review website where logged in users can add a book, and add a review to books others have added. We used JavaScript, a SQL database using MySQL and Sequelize, and Express Handlebars to render our server side data on to the client side. ",
            github:"https://github.com/Boywondr84/iReadIt.git",
            site:"https://immense-ravine-74376.herokuapp.com/"
        },
        {
            id:7,
            name:"Quick Cookies",
            description:"This was my third and final group project of bootcamp. Quick Cookies is a cookie subscriptrion website. For this project we used a NoSQL database with MongoDB and Mongoose and used GraphQL along with Apollo to query for our APIs. JavaScript was our main language used in this project.",
            github:"https://github.com/Boywondr84/mern-subscription.git",
            site:"https://thawing-basin-74038.herokuapp.com/"
        }

    ])
    const toggleModal = (project, i) => {
        setCurrentProject({...project, index: i});
        setIsProjectOpen(!isProjectOpen);
    }
    return (
        <section>
            {isProjectOpen && (<Project currentProject={currentProject} onClose={toggleModal}/>)}
            
            <ul>
                {projects.map((project, i) => {
                    return(
                        <div className="project">
                        <li key={project.id}>
                        <h2>{project.name}</h2>
                            <img
                            src={require(`../../assets/${project.id}.png`)}
                            alt={project.name}
                            className='img-thumbnail mx-1'
                            onClick={() => toggleModal(project, i)}
                            key={project.name}
                            width='400'
                            height='228'
                            />
                        </li>
                        </div>
                )
                    
                })}
            </ul>

        </section>
    );
}

export default Portfolio;
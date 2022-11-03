import React, { useState } from 'react';
import Project from '../Project';

function Portfolio(props) {
    const [isProjectOpen, setIsProjectOpen ] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
            id: 1,
            name: 'Run Buddy',
            github: "https://github.com/codequeen69/run-buddy.git",
            site: "https://codequeen69.github.io/run-buddy/"
        },
        {
            id: 2,
            name: "Password Generator",
            github: "https://github.com/codequeen69/Password-producer.git",
            site: "https://codequeen69.github.io/Password-producer/"
        },
        {
            id: 3,
            name: "Schedule My Day",
            github: "https://github.com/codequeen69/schedule-my-day.git",
            site:"https://codequeen69.github.io/schedule-my-day/"

        },
        {
            id: 4,
            name: "My Weather App",
            github: "https://github.com/codequeen69/my-weather-app.git",
            site: "https://codequeen69.github.io/my-weather-app/"
        },
        {
            id:5,
            name: "Take Note!",
            github: "https://github.com/codequeen69/take-note.git",
            site:"https://warm-plateau-67956.herokuapp.com/notes"
        },
        {
            id: 6,
            name:"iReadIt",
            github:"https://github.com/Boywondr84/iReadIt.git",
            site:"https://immense-ravine-74376.herokuapp.com/"
        },
        {
            id:7,
            name:"Quick Cookies",
            github:"https://github.com/Boywondr84/mern-subscription.git",
            site:""
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
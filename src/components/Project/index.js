import React from 'react';


function Project ({ onClose, currentProject}) {
    const {id, name, description, github, site } = currentProject
    return(
        <div className='modalBackdrop'>
            <div className="modalContainer">
    <h3 className="modalTitle">{name}</h3>
    <img className='modalPic' src={require(`../../assets/${id}.png`)} alt="current project" 
    width='800' height='456'/>
    <p className='modalDescription'>{description}</p>
    <p>
     <a className='git' href={github}>Github</a>
      <a className='site' href={site}>Website</a>
    </p>
    <button onClick={onClose} type="button">
      Close this modal
    </button>
  </div>

        </div>

    )
}

export default Project;
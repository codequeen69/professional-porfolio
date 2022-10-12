import React from 'react';


function Project ({ onClose, currentProject}) {
    const {id, name, github, site } = currentProject
    return(
        <div className='modalBackdrop'>
            <div className="modalContainer">
    <h3 className="modalTitle">{name}</h3>
    <img src={require(`../../assets/${id}.png`)} alt="current project" 
    width='800' height='456'/>
    <p>
      {github}
      {site}
    </p>
    <button onClick={onClose} type="button">
      Close this modal
    </button>
  </div>

        </div>

    )
}

export default Project;
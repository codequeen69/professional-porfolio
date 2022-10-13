import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';


function Footer () {
    return(
      <div id='page-container'>
        <div id='content-wrap'>
        <footer className="w-100 mt-auto bg-secondary p-4">
      <div className='container'>
      <a href='https://github.com/codequeen69' target='blank'>
        <FaGithub className='github-icon'/>
      </a>
      <a href='https://www.linkedin.com/in/camille-howe-66565b195/' target='blank'>
        <FaLinkedin className='linkedin-icon'/>
      </a>
      <a href='https://open.spotify.com/user/crhowe90' target='blank'>
        <FaSpotify className='spotify-icon'/>
      </a>
      <div className="copy">&copy;2022 C. Howe</div>
      </div>
    </footer>
    </div>
    </div>
    );
}

export default Footer;
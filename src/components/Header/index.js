import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {currentPage, setCurrentPage} =props;
    return (
        <header>
            <div className='header-div'>
            <h1>
                <a href='/'>Camille Howe</a>
            </h1>
            </div>
           
            <Nav
             setCurrentPage={setCurrentPage}
             currentPage={currentPage}
            />
           
        </header>
    );
}

export default Header;
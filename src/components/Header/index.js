import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {currentPage, setCurrentPage} =props;
    return (
        <header>
            <h1>
                <a href='/'>Camille Howe</a>
            </h1>
           
            <Nav
             setCurrentPage={setCurrentPage}
             currentPage={currentPage}
            />
           
        </header>
    );
}

export default Header;
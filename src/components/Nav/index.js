import React, { useState } from 'react';

function Nav(props) {
    console.log(props);
    const [navTab] = useState([
        {
            name: 'About'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Portfolio'
        },
        {
            name: 'Resume'
        }
    ])
    const {currentPage, setCurrentPage} = props;

    const [currentNavTab, setCurrentNavTab] = useState(navTab[0])

    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
            <ul className='flex-row'>
                {navTab.map((category) => (
                    <li
                        className={`${currentNavTab.name === category.name && 'navActive'}`}
                        key={category.name}>

                        <span
                            onClick={() => {
                                setCurrentNavTab(category);
                                setCurrentPage(category.name);
                            }}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    );
}

export default Nav ;
import React from 'react';
import './Header.css';

const Header = ({name}) => {
    return (
        <header>
            <h4>Now playing:</h4>
            <h2>{name}</h2>
        </header>
    );
}

export default Header;

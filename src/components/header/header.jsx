import React from 'react';
import './header.css';

import logo from '../../imgs/logo.png';

function Header() {
 return (
    <header>
        <img id='logoH' src={logo}></img>
    </header>
 );
}

export default Header;
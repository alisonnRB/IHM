import React from 'react';
import './header.css';
import { useState, useEffect } from 'react';

import logo from '../../imgs/logo.png';
import logoD from '../../imgs/logo-dark.png';

function Header(props) {
    const [theme, setTheme] = useState(false);

    useEffect(()=>{
        if(props.create){
            setTheme(true)
        }
    },[props])

 return (
    <header>
        <img id='logoH' src={theme? logoD : logo}></img>
    </header>
 );
}

export default Header;
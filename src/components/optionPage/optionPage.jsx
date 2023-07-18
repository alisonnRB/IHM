import React from 'react';
import './optionPage.css';
import {Link} from 'react-router-dom';

import perfil from '../../imgs/perfil.png';
import livros from '../../imgs/livros.png';
import chat from '../../imgs/chat.png';
import feed from '../../imgs/feed.png';
import config from '../../imgs/config.png';

function Barraop() {
 return (
    <div id='barra'>
      <Link to='/'>
      <div>
        <img src={perfil} alt="" />
      </div>
      </Link>
      
      <Link to='/Livros'>
      <div>
        <img src={livros} alt="" />
      </div>
      </Link>
      
      <Link to='/Chat'>
      <div>
        <img src={chat} alt="" />
      </div>
      </Link>
      
      <Link to='/Feed'>
      <div>
        <img src={feed} alt="" />
      </div>
      </Link>
      
      <Link to='/Config'>
      <div>
        <img src={config} alt="" />
      </div>
      </Link>
      
    </div>
 );
}

export default Barraop;
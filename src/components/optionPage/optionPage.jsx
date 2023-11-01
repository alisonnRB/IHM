import React from 'react';
import './optionPage.css';
import {Link} from 'react-router-dom';


import perfil from '../../imgs/perfil.png';
import livros from '../../imgs/livros.png';
import chat from '../../imgs/chat.png';
import feed from '../../imgs/feed.png';
import config from '../../imgs/config.png';
import pessoas from '../../imgs/pessoas.png';

//? este é o componente que carrega os caminhos da pagina

function Barraop() {
  
 return (
    //TODO a tag LINK faz o redirecionamento para as rotas de acord com os clicks
    <div id='barra'>
      <Link to='/perfil'>
      <div className='optionP'>
        <img src={perfil} alt="" />
      </div>
      </Link>

      <Link to='/Busca'>
      <div className='optionP'>
        <img id='pes' src={pessoas} alt="" />
      </div>
      </Link>
      
      <Link to='/Livros'>
      <div className='optionP'>
        <img src={livros} alt="" />
      </div>
      </Link>
      
      <Link to='/Chat'>
      <div className='optionP'>
        <img id='ch' src={chat} alt="" />
      </div>
      </Link>
      
      <Link to='/Feed'>
      <div className='optionP'>
        <img src={feed} alt="" />
      </div>
      </Link>
      
      <Link to='/Config'>
      <div className='optionP'>
        <img src={config} alt="" />
      </div>
      </Link>
      
    </div>
 );
}

export default Barraop;
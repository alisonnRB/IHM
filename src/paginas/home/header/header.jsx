import React, { useEffect, useState } from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import logo from '../../../imgs/logo.png';

function head() {
  //TODO passa como propriedades as informações(user) do usuario para os elementos filhos acessarem
  return (
    <header className='MAIN'>
        <span className='caixa-left'>
            <img src={logo} id='logoMAIN'/>

            <Link to='/login'><button className='btMA'>Login</button></Link>
            <Link><button className='btMA'>Cadastre-se</button></Link>
        </span>

        <button className='btMA'>Sobre nós</button>
    </header>
  );
}

export default head;

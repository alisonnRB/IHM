import React, { useEffect, useState } from 'react';
import './header.css';

import logo from '../../../imgs/logo.png';

function head() {
  //TODO passa como propriedades as informações(user) do usuario para os elementos filhos acessarem
  return (
    <header className='MAIN'>
        <span className='caixa-left'>
            <img src={logo} id='logoMAIN'/>

            <button className='btMA'>Login</button>
            <button className='btMA'>Cadastre-se</button>
        </span>

        <button className='btMA'>Sobre nós</button>
    </header>
  );
}

export default head;

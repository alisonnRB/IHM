import React from 'react';
import './mensagem.css';

import perfil from '../../../../imgs/perfil.png';
import send from '../../../../imgs/enviar.png';


function Mensagem() {
  return (
    <div className='mensagem'>
      <span className='perfilMsg'>
        <img src={perfil} alt="" />
        <div id='chatOption'>⁝</div>
        </span>
      <div className='renderMsg'>


      </div>
      <span className='caixaEnviar'>
        <form action="POST">
        <input className='inputEnvio' type="text" />

        <button type='submit'>
          <img src={send} alt="" />
        </button>
        </form>

      </span>
    </div>
    );
  }
  
  export default Mensagem;
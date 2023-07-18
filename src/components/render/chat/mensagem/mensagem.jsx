import React from 'react';
import './mensagem.css';



function Mensagem() {
  return (
    <div className='mensagem'>
      <span className='perfilMsg'>
        <img src="logo.png" alt="" />
        <div id='chatOption'>⁝</div>
        </span>
      <div className='renderMsg'>


      </div>
      <span className='caixaEnviar'>
        <form action="POST">
        <input className='inputEnvio' type="text" />
        <input type="submit" value="&#62;" />
        </form>

      </span>
    </div>
    );
  }
  
  export default Mensagem;
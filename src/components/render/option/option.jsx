//! PAGE A SER TRABALHADA

import React from 'react';
import './option.css';

import sol from '../../../imgs/sol.png';
import lua from '../../../imgs/lua.png';

//? componente que comporta as opções

function Option() {
  return (
    <div className='option'>
      <div className='tittleConfig'>
        <p>configurações</p>
      </div>
      
      <span className='optionConfig'>
        <p>idioma</p>
        <select name="" id="">
          <option value="portugues">portugues</option>
          <option value="espanhol">espanhol</option>
          <option value="ingles">ingles</option>
          <option value="latim">latim</option>
        </select>
      </span>

      <span className='optionConfig'>
        <p id='tema'>tema</p>
        <button className='btTema'><img src={sol} alt="" /></button>
        <button className='btTema'><img src={lua} alt="" /></button>
      </span>

      <div className='privConfig'>
          <p id='priv'>privacidade</p>

        <span className=''>
          <p>visualização</p>
          <select name="" id="">
            <option value="bloquear">bloquear</option>
            <option value="ativar">ativar</option>
          </select>

          <select name="" id="">
            <option value="publicações">publicações</option>
            <option value="sla">sla</option>
          </select>

        </span>

        <span className=''>
          <p>chat</p>
          <select name="" id="">
            <option value="mensagem">mensagem</option>
            <option value="sla">sla</option>
          </select>
        </span>
      </div>

    </div>
    );
  }
  
  export default Option;
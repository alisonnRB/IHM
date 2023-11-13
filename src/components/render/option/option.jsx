import React from 'react';
import './option.css';

import sol from '../../../imgs/sol.png';
import lua from '../../../imgs/lua.png';

//? componente que comporta as opções

export default function Option() {
  return (
    <div className='option'>
      <span id='titlePerfil'>Configurações</span>

      <div className='comport'>

        <div className="com">
          <label htmlFor="idioma">IDIOMA</label>
          <select name="idioma" id="idioma">
            <option value="PT" className="idi">Português</option>
            <option value="EN" className="idi">Iglês</option>
            <option value="ES" className="idi">Espanhol</option>
          </select>
        </div>

        <div className="com">
          <label htmlFor="tema">TEMA</label>
          <span id='tema'>
            <img src={sol} className="tema" />
            <img src={lua} className="tema" />
          </span>
        </div>

        <div className="com">
          <label htmlFor="newSenha">ALTERAR SENHA</label>
          <form id="newSenha">
            <input type="password" placeholder='Senha atual' />
            <input type="password" placeholder='Nova senha' />
            <input type="password" placeholder='Confirmar senha' />

            <button type='submit' id='newSe'>PRONTO</button>
          </form>
        </div>

      </div>
    </div>
  );
}

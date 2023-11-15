import React from 'react';
import './option.css';

import sol from '../../../imgs/sol.png';
import lua from '../../../imgs/lua.png';

import { useState, useEffect } from 'react';

//? componente que comporta as opções

export default function Option() {

  const [tema, setTema] = useState('light');
  const [idioma, setIdioma] = useState('EN');

  useEffect(() => {
    qual_tema();
    qual_idioma();
  }, [])

  const qual_tema = () => {
    let themes = localStorage.getItem('tema');
    if (themes) {
      setTema(themes);
    }
  }

  const qual_idioma = () => {
    let idioma = localStorage.getItem('idioma');
    if (idioma) {
      setIdioma(idioma);
    }
  }

  const change_idioma = (e) =>{
    let idi = e.target.value;
    if(idi !== '' && idi != idioma){
      localStorage.setItem('idioma', idi);
      window.location.reload();
    }
  }

  return (
    <div className='option'>
      <span id='titlePerfil'>CONFIGURAÇÕES</span>

      <div className='comport'>

        <div className="com">
          <label htmlFor="idioma">IDIOMA</label>
          <select value={idioma} onChange={(e)=>{change_idioma(e)}} name="idioma" id="idioma">
            <option value="PT" className="idi">PORTUGUÊS</option>
            <option value="EN" className="idi">INGLÊS</option>
            <option value="ES" className="idi">ESPANHOL</option>
          </select>
        </div>

        <div className="com">
          <label htmlFor="tema">TEMA</label>
          <span id='tema'>
            <img src={sol} className="tema" onClick={() => { localStorage.setItem('tema', 'light'); window.location.reload() }} style={tema === 'light' ? { backgroundColor: '#EBECF0' } : null} />
            <img src={lua} className="tema" onClick={() => { localStorage.setItem('tema', 'dark'); window.location.reload() }} style={tema === 'dark' ? { backgroundColor: '#EBECF0' } : null} />
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

import React from 'react';
import './option.css';

import sol from '../../../imgs/sol.png';
import lua from '../../../imgs/lua.png';

import api from "../../../backend/controler/api_newSenha";

import { useState, useEffect } from 'react';
import Warning from './warning/warning';
import { useNavigate } from 'react-router-dom';

//? componente que comporta as opções

export default function Option() {
  const navigate = useNavigate();

  const [tema, setTema] = useState('light');
  const [idioma, setIdioma] = useState('EN');


  const [senhaAntiga, setSenhaAntiga] = useState('');
  const [senhaNova, setSenhaNova] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');
  const [message, setMessage] = useState('');

  const [pronto, setPronto] = useState(false);

  const [abreWindow, setAbreWindow] = useState(false);

  useEffect(() => {
    qual_tema();
    qual_idioma();
  }, [])

  useEffect(() => {
    if (senhaNova === senhaConfirma && senhaNova != '' && senhaConfirma != '' && senhaAntiga != '') {
      setPronto(true);
    } else {
      setPronto(false);
    }
  }, [senhaNova, senhaConfirma, senhaAntiga]);

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

  const change_idioma = (e) => {
    let idi = e.target.value;
    if (idi !== '' && idi != idioma) {
      localStorage.setItem('idioma', idi);
      window.location.reload();
    }
  }


  const Troca_senha = async (e) => {
    e.preventDefault();
    const resposta = await api.enviar(senhaAntiga, senhaNova);
    if (resposta.ok) {
      setMessage(resposta.informacoes);
      setSenhaAntiga('');
      setSenhaNova('');
      setSenhaConfirma('');
      setPronto(false);
    } else {
      setMessage(resposta.informacoes);
    }
  }

  return (
    <div className='option'>
      <span id='titlePerfil'>CONFIGURAÇÕES</span>

      <div className='comport'>

        <div className="com">
          <label htmlFor="idioma">IDIOMA</label>
          <select value={idioma} onChange={(e) => { change_idioma(e) }} name="idioma" id="idioma">
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
          <form id="newSenha" onSubmit={pronto ? (e) => { Troca_senha(e) } : (e) => { e.preventDefault() }}>
            <input type="password" value={senhaAntiga} onChange={(e) => { setSenhaAntiga(e.target.value) }} placeholder='Senha atual' />
            <input type="password" value={senhaNova} onChange={(e) => { setSenhaNova(e.target.value) }} placeholder='Nova senha' />
            <input type="password" value={senhaConfirma} onChange={(e) => { setSenhaConfirma(e.target.value) }} placeholder='Confirmar senha' />

            <span className='errorBOX' style={message == 'senha alterada' ? { color: 'green' } : null}>{message}</span>

            <button type='submit' id='newSe' style={pronto ? { cursor: 'pointer', backgroundColor: '#0B637D' } : null}>PRONTO</button>
          </form>
        </div>

        <div className="com">
          <label htmlFor="conta">CONTA</label>
          <span id='conta'>
            <button id='sair' onClick={() => { sessionStorage.clear(); navigate('/login') }}>SAIR</button>
            <button id='excluir' onClick={() => { setAbreWindow(true) }}>EXCLUIR</button>
          </span>

          {abreWindow ? <Warning setAbre={setAbreWindow} /> : null}
        </div>

      </div>
    </div>
  );
}

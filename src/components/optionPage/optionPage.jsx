import React from 'react';
import './optionPage.css';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';


import perfil from '../../imgs/perfil.png';
import livros from '../../imgs/livros.png';
import chat from '../../imgs/chat.png';
import feed from '../../imgs/feed.png';
import config from '../../imgs/config.png';
import pessoas from '../../imgs/pessoas.png';

import perfilD from '../../imgs/perfil-dark.png';
import livrosD from '../../imgs/livro-dark.png';
import chatD from '../../imgs/chat-dark.png';
import feedD from '../../imgs/feed-dark.png';
import configD from '../../imgs/config-dark.png';
import pessoasD from '../../imgs/busca-dark.png';

import api from '../../backend/controler/api_AllMSG';

//? este é o componente que carrega os caminhos da pagina

function Barraop() {
  const [select, setSelect] = useState(false);
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState('light');

  console.log(localStorage.getItem('tema'))

  useEffect(() => {
    if (!select) {
      Busca();
    }
    let a = localStorage.getItem('tema');
    if(a){
      setTheme(a);
    }
  }, []);

useEffect(() => {
  if (!select) {
    const timeoutId = setTimeout(() => {
      Busca();
      if(select){
        setNum(0);
      }
    }, 30000);

    return () => clearTimeout(timeoutId); // Limpeza do setTimeout
  }

}, [select]);

  useEffect(() => {
    if (select) {
      setNum(0);
    } else {
      Busca();
    }
  }, [select]);

  const Busca = async () => {
    const resposta = await api.enviar();
    if (resposta.ok) {
      if (resposta.informacoes.Num > 99) {
        setNum('99+');
      } else {
        setNum(resposta.informacoes.Num);
      }
    }
  }
  
  return (
    //TODO a tag LINK faz o redirecionamento para as rotas de acord com os clicks
    <div id='barra'>
      <Link to='/IHM/perfil'>
        <div className='optionP' onClick={() => { setSelect(false) }}>
          <img src={theme == 'light' ? perfil : perfilD} alt="" />
        </div>
      </Link>

      <Link to='/IHM/Busca'>
        <div className='optionP' onClick={() => { setSelect(false) }}>
          <img id='pes' src={theme == 'light' ? pessoas : pessoasD} alt="" />
        </div>
      </Link>

      <Link to='/IHM/Livros'>
        <div className='optionP' onClick={() => { setSelect(false) }}>
          <img src={theme == 'light' ? livros : livrosD} />
        </div>
      </Link>

      <Link to='/IHM/Chat'>
        <div className='optionP' onClick={() => { setSelect(true) }}>
          <img id='ch' src={theme == 'light' ? chat : chatD} alt="" />
          <div className={`msg-new ${num == 0 ? 'not' : null}`} style={num < 10 ? { fontSize: '1.2em' } : null}>{num != 0 ? num : null}</div>
        </div>
      </Link>

      <Link to='/IHM/Feed'>
        <div className='optionP' onClick={() => { setSelect(false) }}>
          <img src={theme == 'light' ? feed : feedD} alt="" />
        </div>
      </Link>

      <Link to='/IHM/Config'>
        <div className='optionP' onClick={() => { setSelect(false) }}>
          <img src={theme == 'light' ? config : configD} alt="" />
        </div>
      </Link>

    </div>
  );
}

export default Barraop;
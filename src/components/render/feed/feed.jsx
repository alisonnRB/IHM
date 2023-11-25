import React from 'react';
import { useEffect, useState } from 'react';
import './feed.css';
import Card from './cardPost/cardPost';
import BtFloat from '../../BtFloat/btFloat.jsx';
import Noti from "../../notificacao/notificacao.jsx";

import api from "../../../backend/controler/api_searchFeed";

//? page reponsavel por mostrar as postagens 
export default function Feed() {
  const [theme, setTheme] = useState('light');
  const [publis, setPublis] = useState({});

  useEffect(() => {
    Busca();
    let a = localStorage.getItem('tema');
    if(a){
      setTheme(a);
    }
  }, [])

  const Busca = async () => {
    const resposta = await api.enviar();
    if (resposta.ok) {
      setPublis(resposta.informacoes);
    }
  }

  const gera_posts = () => {
    const list = []
    for (let i = 0; i < Object.keys(publis).length; i++) {
      let a = <Card key={i} publi={publis[i]} />

      list.push(a);
    }

    return list;
  }

  return (
    <div className='feed'>
      <Noti />
      <span id='titlePerfil' className={`${theme == 'light' ? null : 'dark'}`}>FEED</span>

      <div className='renderPosts'>
        {gera_posts()}
      </div>

      <BtFloat />

    </div>
  );
}
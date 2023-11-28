import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './feed.css';
import Card from './cardPost/cardPost';
import BtFloat from '../../BtFloat/btFloat.jsx';
import Noti from "../../notificacao/notificacao.jsx";
import api from "../../../backend/controler/api_searchFeed";
import Load from "../../loading/loading.jsx";

export default function Feed() {
  const [theme, setTheme] = useState('light');
  const [publis, setPublis] = useState({});
  const [publicacoes, setPublicacoes] = useState([]);
  const num = useRef(0);
  const [ref, inView] = useInView();

  const [Loadi, setLoad] = useState(false);
  let init = false;

  useEffect(() => {
    if (!init) {
      Busca();
    }

    let a = localStorage.getItem('tema');
    if (a) {
      setTheme(a);
    }
    init = true;
  }, []);

  useEffect(() => {
    if (inView && !Loadi) {
      Busca();
    }
  }, [inView, Loadi]);

  const Busca = async () => {
    if (Loadi) {
      return;
    }

    setLoad(true);
    const resposta = await api.enviar(num.current);
    if (resposta.ok) {
      setPublis(resposta.informacoes);

      // Adiciona novas publicações ao estado atual
      setPublicacoes((prevPublicacoes) => [
        ...prevPublicacoes,
        ...Object.values(resposta.informacoes),
      ]);

      num.current += Object.keys(resposta.informacoes).length;
    }


    setLoad(false);

  };

  const gera_posts = () => {
    return publicacoes.map((post, index) => (
      <Card key={index} publi={post} />
    ));
  };

  return (
    <div className='feed'>
      <Noti />
      <span id='titlePerfil' className={`${theme == 'light' ? null : 'dark'}`}>FEED</span>

      <div className='renderPosts'>
        {gera_posts()}
      </div>

      <BtFloat />

      <div className='disparador' ref={ref}>
        {Loadi ? <Load /> : null}
      </div>
    </div>
  );
}

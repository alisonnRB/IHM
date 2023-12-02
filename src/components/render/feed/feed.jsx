import React, { useEffect, useState, useRef } from 'react';
import './feed.css';

import BtFloat from '../../BtFloat/btFloat.jsx';
import Noti from "../../notificacao/notificacao.jsx";

import Seguindo from './seguindo/seguindo.jsx';
import ForYou from './fy/fy.jsx';

export default function Feed() {
  const [select, setSelect] = useState(false);

  const [theme, setTheme] = useState('light');


  useEffect(() => {
    let a = localStorage.getItem('tema');
    if (a) {
      setTheme(a);
    }
  }, []);

  return (
    <div className='feed'>
      <Noti />
      <span id='titlePerfil' className={`${theme == 'light' ? null : 'dark'}`}>FEED</span>

      <span className='btPBF'>
        <p onClick={() => { setSelect(false) }} className={`btLF ${!select ? 'sets' : null}`}>SEGUINDO</p>
        <p onClick={() => { setSelect(true) }} className={`btLF ${select ? 'sets' : null}`}>PARA VOCÊ</p>
      </span>

      {!select ? <Seguindo /> : <ForYou />}

      <BtFloat />

    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Head from '../../components/header/header';
import './homepage.css';
import Barraop from '../../components/optionPage/optionPage';
import Render from '../../components/render/render';

import api from '../../backend/controler/api_info';

function Home() {
  const id = localStorage.getItem('id');

  const [infos, setInfos] = useState(null);

  const Busca = async () => {
    const resposta = await api.enviar(id);
    setInfos(resposta.userInfo);
  };

  useEffect(() => {
    Busca();
  }, []);

  return (
    <div className='boxHome'>
      <div>
        <Head />
      </div>
      <div className='pagina'>
        <Barraop />
        <div className='boxOnPage'>
          <Render user={infos}/>
        </div>
      </div>
    </div>
  );
}

export default Home;

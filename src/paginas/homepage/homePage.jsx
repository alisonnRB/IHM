import React, { useEffect, useState } from 'react';
import Head from '../../components/header/header';
import './homepage.css';
import Barraop from '../../components/optionPage/optionPage';
import Render from '../../components/render/render';

import api from '../../backend/controler/api_info';

function Home() {
  const [infos, setInfos] = useState(null);
  const id = localStorage.getItem('id');
  useEffect(() => {
    Busca();
  }, []);

  const Busca = async () => {
    //TODO prepara a api para fazer a requisição para o server e receber as resposta aqui
    const resposta = await api.enviar(id);

    //TODO atualiza o estado da infos
    setInfos(resposta.userInfo);
  };
  //TODO o useEffect permite executar algo apenas em um evento especifico, aqui é quando a page é construida


  //TODO passa como propriedades as informações(user) do usuario para os elementos filhos acessarem
  return (
    <div className='boxHome'>
      <div>
        <Head />
      </div>
      <div className='pagina'>
        <Barraop />
        <div className='boxOnPage'>
          <Render user={infos} />
        </div>
      </div>
    </div>
  );
}

export default Home;

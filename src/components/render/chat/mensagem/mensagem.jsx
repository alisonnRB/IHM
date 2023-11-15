import React from 'react';
import './mensagem.css';

import { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

import send from '../../../../imgs/enviar.png';
import api from '../../../../backend/controler/api_chats';


export default function Mensagem(props) {
  const id = localStorage.getItem('id');

  const [mensagem, setMensagem] = useState('');

  const [messageHistori, setMessageHistori] = useState({});
  const [New, setNew] = useState(false);

  const [infos, setinfos] = useState('');
  const [foto, setFoto] = useState('');

  const { lastJsonMessage, sendMessage } = useWebSocket('ws://10.1.1.211:8080', {
    onOpen: () => console.log('a'),
    onMessage: () => {
      if (lastJsonMessage) {
        console.log('recebido');
      }
    },
    queryParams: { 'id': id },
    onError: (event) => { console.error(event); },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });

  const Busca = async () => {
    const resposta = await api.enviar(infos.id);
    if (resposta.ok) {
      setMessageHistori(resposta.informacoes);
    }
  }

  useEffect(() => {
    if (props.selecionado && props.selecionado != 0) {
      setinfos(props.selecionado);
    }
  }, [props.selecionado])

  useEffect(() => {
    if (infos) {
      Busca();
    }
  }, [infos])

  useEffect(() => {
    if (typeof infos.fotoPerfil == "string") {
      setFoto("http://10.1.1.211/imagens/" + infos.fotoPerfil);
    }
  }, [infos.fotoPerfil]);

  useEffect(() => {
    if (lastJsonMessage && lastJsonMessage.message && lastJsonMessage.by && lastJsonMessage.for) {

      let msgs = messageHistori;

      let obj = {
        'id_user1': JSON.parse(lastJsonMessage.by),
        'id_user2': lastJsonMessage.for,
        'texto': lastJsonMessage.message,
      };

      msgs[Object.keys(msgs).length] = obj;
      setMessageHistori(msgs);
      setNew(!New);

    } else {
      console.log(lastJsonMessage);
    }

  }, [lastJsonMessage]);

  const handleEnviarMensagem = (e) => {
    e.preventDefault()
    if (mensagem.trim() !== '') {
      sendMessage(JSON.stringify({ message: mensagem, for: infos.id, by: id }));

      let msgs = messageHistori;

      let obj = {
        'id_user1': JSON.parse(id),
        'id_user2': infos.id,
        'texto': mensagem,
      };

      msgs[Object.keys(msgs).length] = obj;
      setMessageHistori(msgs);
      setNew(!New);

      setMensagem('');
    }
  };

  const gera_message = () => {

    const list = [];
    if (messageHistori && messageHistori[0]) {

      for (let i = 0; i < Object.keys(messageHistori).length; i++) {

        if (messageHistori[i]['id_user1'] && messageHistori[i]['id_user1'] == id && messageHistori[i]['id_user2'] == infos.id) {
          var a = <span key={i + 1} className='message mine'>
            <span className='msg mine'>
              {messageHistori[i]['texto']}
            </span>
          </span>;
        }

        else if (messageHistori[i]['id_user1'] && messageHistori[i]['id_user1'] == infos.id && messageHistori[i]['id_user2'] == id) {
          var a = <span key={i + 1} className='message by'>
            <span className='msg by'>
              {messageHistori[i]['texto']}
            </span>
          </span>;
        }

        list.push(a);
      }

    }
    return list;
  }

  return (
    <div className='mensagem'>

      <span className='perfilMsg'>
        <img src={foto} />
        <p>{infos.nome ? `@${infos.nome}` : '...'}</p>
      </span>


      <div className='renderMsg'>

        {New ? gera_message() : gera_message()}

      </div>

      <span className='caixaEnviar'>

        <form onSubmit={handleEnviarMensagem}>
          <input className='inputEnvio' type="text" value={mensagem} onChange={(e) => { setMensagem(e.target.value) }} />

          <button type='submit'>
            <img src={send} alt="" />
          </button>
        </form>

      </span>
    </div>
  );
}

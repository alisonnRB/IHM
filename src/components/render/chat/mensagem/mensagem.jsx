import React from 'react';
import './mensagem.css';

import { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

import send from '../../../../imgs/enviar.png';


export default function Mensagem(props) {
  const [numero, setNumero] = useState(0);
  const [mensagem, setMensagem] = useState('');


  const [infos, setinfos] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    if (props.selecionado && props.selecionado != 0) {
      setinfos(props.selecionado);
    }
  }, [props.selecionado])

  useEffect(() => {
    if (typeof infos.fotoPerfil == "string") {
      setFoto("http://192.168.255.56/imagens/" + infos.fotoPerfil);
    }
  }, [infos.fotoPerfil]);

  const id = sessionStorage.getItem('session');
  const { lastJsonMessage, sendMessage } = useWebSocket('ws://192.168.255.56:8080', {
    onOpen: () => console.log(`Connected to App WS`),
    onMessage: () => {
      if (lastJsonMessage) {
        console.log(lastJsonMessage);
        setNumero(lastJsonMessage.n);
      }
    },
    queryParams: { 'token': id },
    onError: (event) => { console.error(event); },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });

  const handleEnviarMensagem = (e) => {
    e.preventDefault()
    if (mensagem.trim() !== '') {
      sendMessage(JSON.stringify({ message: mensagem }));
      setMensagem('');
    }
  };

  return (
    <div className='mensagem'>

      <span className='perfilMsg'>
        <img src={foto} />
        <p>{infos.nome ? `@${infos.nome}` : '...'}</p>
      </span>


      <div className='renderMsg'>


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

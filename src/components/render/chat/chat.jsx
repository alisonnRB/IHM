import React from 'react';
import './chat.css';
import { useState } from 'react';

import Mensagem from './mensagem/mensagem';
import Conversas from './conversas/conversas';
import BtFloat from '../../BtFloat/btFloat.jsx';


//? comporta os componente que montam a pagina de chats

export default function Chat() {
  const [selecionado, setSelecionado] = useState(0);
  const [att, setAtt] = useState(false);

  return (
    <div className='chat'>
      <span id='titlePerfil'>CHAT</span>
      <span className='contentMSG'>
        <Conversas setSelecionado={setSelecionado} setAtt={setAtt} att={att}/>
        <Mensagem selecionado={selecionado} setAtt={setAtt}/>
      </span>

      <BtFloat />

    </div>
  );
}


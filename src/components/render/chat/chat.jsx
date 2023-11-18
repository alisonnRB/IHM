import React from 'react';
import './chat.css';
import { useState } from 'react';

import Mensagem from './mensagem/mensagem';
import Conversas from './conversas/conversas';
import BtFloat from '../../BtFloat/btFloat.jsx';


//? comporta os componente que montam a pagina de chats

export default function Chat() {
  const [selecionado, setSelecionado] = useState(0);

  return (
    <div className='chat'>
      <span id='titlePerfil'>CHAT</span>
      <span className='contentMSG'>
        <Conversas setSelecionado={setSelecionado}/>
        {selecionado != 0 ? <Mensagem selecionado={selecionado}/> : null}
      </span>

      <BtFloat />

    </div>
  );
}


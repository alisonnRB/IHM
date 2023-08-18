//! PAGE A SER TRABALHADA

import React from 'react';
import './chat.css';
import Carrossel from './carrossel/carrossel';
import Mensagem from './mensagem/mensagem';
import Conversas from './conversas/conversas';


//? comporta os componente que montam a pagina de chats

function Chat() {
  

  return (
  
    <div className='chat'>
      <Carrossel />
      <span>
        <Conversas />
        <Mensagem />
      </span>


    </div>
    );
  }
  
  export default Chat;
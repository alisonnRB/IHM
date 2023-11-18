import React, { useState } from 'react';
import './index.css';

import { useNavigate } from 'react-router-dom';

import api from '../../../../backend/controler/api_login';

import { setVariavelGlobal } from '../../../GvarAuth';


export default function Login() {
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //? prepara os valores para enviar a api
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const resposta = await api.enviar(email, senha);

    //TODO salva no localstorage as resposta do server

    if (resposta.ok) {
      sessionStorage.setItem('session', resposta.informacoes);
      navigate('/IHM/perfil');
      setVariavelGlobal(false);
    } else {
      setErro(resposta.informacoes)
    }
  };

  //TODO abre a janela de cadastro caso click
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p>{erro}</p>

        <label htmlFor="email">E-MAIL</label>
        <input className="form_pass" id='email' type="email" name="email" placeholder="Digite aqui..." />

        <label htmlFor="senha">SENHA</label>
        <input className="form_pass" id='senha' type="password" name="senha" placeholder="Digite aqui..." />

        <span className='contain-butt'>
          <input className="form_button" type="submit" value="ENTRAR" />
          <button className="form_button gog">ENTRAR COM GOOGLE</button>
        </span>

      </form>

      <span className='rec-log'>
        <p id="recuperar" >Esqueceu a senha?</p>
      </span>

    </>
  );
}
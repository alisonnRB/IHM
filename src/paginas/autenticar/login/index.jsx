import React, { useEffect, useState } from 'react';
import './index.css';

import { useNavigate } from 'react-router-dom';

import api from '../../../backend/controler/api_login';
import api_google from "../../../backend/controler/api_loginGoogle";

import { setVariavelGlobal } from '../../../GvarAuth';


export default function Login() {
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  async function handleCallbackResponse(response) {
    var userOBJ = response.credential;

    const resposta = await api_google.enviar(userOBJ);
    if (resposta.ok) {
      sessionStorage.setItem('session', resposta.informacoes);
      navigate('/IHM/perfil');
      setVariavelGlobal(false);
    } else {
      setErro(resposta.informacoes)
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "592499016939-fat3h1m0beidscm4qfsnafamh4rj94of.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", sixe: "large" }
    )
  }, [])

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
        <p className='err'>{erro}</p>

        <label htmlFor="email">E-MAIL</label>
        <input className="form_pass" id='email' type="email" name="email" placeholder="Digite aqui..." />

        <label htmlFor="senha">SENHA</label>
        <input className="form_pass" id='senha' type="password" name="senha" placeholder="Digite aqui..." />

        <span className='contain-butt'>
          <input className="form_button" type="submit" value="ENTRAR" />
          <div id='signInDiv' className="form_button gog">ENTRAR COM GOOGLE</div>
        </span>

      </form>

      <span className='rec-log'>
        <p id="recuperar" >Esqueceu a senha?</p>
      </span>

    </>
  );
}
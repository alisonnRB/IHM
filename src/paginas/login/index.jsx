import React, { useState } from 'react';
import './index.css';

import { useNavigate } from 'react-router-dom';

import Cadastro from '../login/forms/form_cadastro';
import api from '../../backend/controler/api_login';


export default function Login() {
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    //? prepara os valores para enviar a api
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const resposta = await api.enviar(email, senha);
    
    //TODO salva no localstorage as resposta do server
    localStorage.setItem('Authorization', resposta.authorization);
    localStorage.setItem('id', resposta.id);

    console.log(localStorage.getItem('Authorization'));
    if (resposta.ok == false) {
      setErro(resposta.msg)
    }

    if (localStorage.getItem('Authorization') === 'logado') {
      //? navega para o perfil caso a authorização seja correta
      //! este metodo é temporario, deve ser construido o sistema de token
      navigate('/Perfil');
    }

  };

  const fecharCadastro = () => {
    //? responsavel por fechar o componente de cadastro
    setMostrarCadastro(false);
  };


  //TODO abre a janela de cadastro caso click
  return (
    <div id="box">
      <div className='animaLogin'>
        <div id="fundo"></div>
        <img id="logo" src="logo.png"></img>
      </div>
      <div className="box_form">
        <div id="content_cad">
        <form className="form" onSubmit={handleSubmit}>
          <p>{erro}</p>
          <input className="form_email" type="email" name="email" placeholder="Email"></input>
          <input className="form_pass" type="password" name="senha" placeholder="Senha"></input>
          <input className="form_button" type="submit" value="Entrar"></input>
        </form>
        
        <p id="cadastro" onClick={() => setMostrarCadastro(true)}>Ainda não posssui uma conta</p>
        {mostrarCadastro && <Cadastro fecharCadastro={fecharCadastro} />}
        </div>
      </div>
    </div>
  );
}
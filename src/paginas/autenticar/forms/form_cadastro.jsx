import React, { useState, useEffect } from 'react';
import api from "../../../backend/controler/api_cadastro";

import api_google from "../../../backend/controler/api_cadastraGoogle";

//* as propriedades do elemento pai são recebidas no args props
export default function Cadastro(props) {
  const [Erro, setErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); //? previne o comportamento padrão da pagina de recarregar ao envio de form

    //? prepara os avlores para a api
    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    const confSenha = event.target.confsenha.value;



    const resposta = await api.enviar(nome, email, senha, confSenha);

    if (resposta.ok) {
      const confirmacao = window.confirm('Cadastro realizado com sucesso!');
      //? caso a resposta do server seja positiva emite um alert e fecha a janela

      if (confirmacao) {
        props.setSelect(false);
      }
    } else {
      setErro(resposta.informacoes);
    }
  };

  async function handleCallbackResponse(response) {
    var userOBJ = response.credential;

    const resposta = await api_google.enviar(userOBJ);
    if (resposta.ok) {
      const confirmacao = window.confirm('Cadastro realizado com sucesso!');
      //? caso a resposta do server seja positiva emite um alert e fecha a janela

      if (confirmacao) {
        props.setSelect(false);
      }
    } else {
      setErro(resposta.informacoes);
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
      {
        type: "icon",
        shape: "circle",
        theme: "outline",
        text: "signin_with",
        size: "large"
      }
    )
  }, [])

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className='err'>{Erro}</p>

        <label htmlFor="nomee">NOME</label>
        <input className="form_pass" id='nomee' type="text" name="nome" placeholder="Digite aqui..." />

        <label htmlFor="email">E-MAIL</label>
        <input className="form_pass" id='email' type="email" name="email" placeholder="Digite aqui..." />

        <label htmlFor="senha">SENHA</label>
        <input className="form_pass" id='senha' type="password" name="senha" placeholder="Digite aqui..." />

        <label htmlFor="confSenha">CONFIRMAR SENHA</label>
        <input className="form_pass" id='confSenha' type="password" name="confsenha" placeholder="Digite aqui..." />


        <span className='contain-butt'>
          <input className="form_button" type="submit" value="CADASTRAR" />
          <div id="signInDiv" className="form_button gog"></div>
        </span>

      </form>
    </>
  );
}
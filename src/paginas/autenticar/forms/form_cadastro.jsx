import React, { useState, useEffect } from 'react';
import api from "../../../backend/controler/api_cadastro";
import './form_cadastro.css';

import Load from '../../../components/loading/loading.jsx';
import certo from '../../../imgs/marcado.png';
import errado from '../../../imgs/xis.jpeg';

import api_google from "../../../backend/controler/api_cadastraGoogle";

//* as propriedades do elemento pai são recebidas no args props
export default function Cadastro(props) {
  const [Erro, setErro] = useState('');
  const [load, setLoad] = useState(false);
  const [respondido, setRespondido] = useState(false);
  const [certo_erro, setCerto_erro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoad(true);

    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    const confSenha = event.target.confsenha.value;



    const resposta = await api.enviar(nome, email, senha, confSenha);
    setRespondido(true);
    if (resposta.ok) {
      setCerto_erro('certo');

      setTimeout(() => {
        setRespondido(false);
        setLoad(false);
        setCerto_erro('');
        props.setSelect(false);
      }
        , 1000)

    } else {
      setCerto_erro('erro');
      setErro(resposta.informacoes);
    }

    setTimeout(() => {
      setRespondido(false);
      setLoad(false);
      setCerto_erro('');
    }
      , 980);
  };

  async function handleCallbackResponse(response) {
    var userOBJ = response.credential;

    setLoad(true);

    const resposta = await api_google.enviar(userOBJ);
    setRespondido(true);
    if (resposta.ok) {
      setCerto_erro('certo');

      setTimeout(() => {
        setRespondido(false);
        setLoad(false);
        setCerto_erro('');
        props.setSelect(false);
      }
        , 1000)

    } else {
      setCerto_erro('erro');
      setErro(resposta.informacoes);
    }

    setTimeout(() => {
      setRespondido(false);
      setLoad(false);
      setCerto_erro('');
    }
      , 980);
  };

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

      {load ? <div className={`fundoAWAIT ${certo_erro == 'erro' ? 'err' : null}`}>
        <Load virar={respondido} />
        <img src={certo} className={`certinho ${certo_erro == 'certo' ? 'vire' : null}`} />
        <img src={errado} className={`erradinho ${certo_erro == 'erro' ? 'vire' : null}`} />

        {certo_erro == 'certo' ? <p className='msgC'>CADASTRO REALIZADO</p> : null}
      </div> : null}
    </>
  );
}
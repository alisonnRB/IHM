import React, {useState} from 'react';
import './index.css';

import { useNavigate } from 'react-router-dom';

import Cadastro from '../login/forms/form_cadastro';
import api from '../../backend/controler/api_login';


export default function Login() {
  const [cu, setCu] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const resposta = await api.enviar(email, senha);
    
    console.log(resposta.authorization)
    localStorage.setItem('Authorization', resposta.authorization);
    localStorage.setItem('id', resposta.userInfo.id);

    if(resposta.ok == false){
      setCu(resposta.msg)
    }
    
    if(localStorage.getItem('Authorization') === 'logado'){
      navigate('/');
    }

  };

    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    const fecharCadastro = () => {
        setMostrarCadastro(false);
      };

    return (
      
        <div id="box">
       <div>
           <div id="fundo"></div>
           <img id="logo" src="logo.png"></img>
      </div>
      <div className="box_form">
      <form className="form" onSubmit={handleSubmit}>
          <p>{cu}</p>
          <input className="form_email" type="email" name="email" placeholder="Email"></input>
          <input className="form_pass" type="password" name="senha" placeholder="Senha"></input>
          <input className="form_button" type="submit" value="Entrar"></input> 
        </form>
        
          <p id="cadastro" onClick={() => setMostrarCadastro(true)}>Ainda não posssui uma conta</p>
           {mostrarCadastro && <Cadastro fecharCadastro={fecharCadastro} />}
      
      </div>
   </div>
    );
   }
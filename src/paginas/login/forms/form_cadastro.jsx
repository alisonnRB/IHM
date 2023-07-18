import React, { useState } from 'react';
import './form_cadastro.css';
import api from '../../../api';

export default function Cadastro(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const usuario = event.target.usuario.value;
    const dataNasc = event.target.dataNasc.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const resposta = await api.enviar(nome, usuario, dataNasc, email, senha);

    if (resposta.ok) {
      // Exibe uma caixa de diálogo de confirmação
      const confirmacao = window.confirm('Cadastro realizado com sucesso! ');

      if (confirmacao) {
        // Chama a função desejada
        props.fecharCadastro();
      }
    } else {
      alert('Erro ao cadastrar: ' + resposta.msg);
    }
  };

  return (
    <div id="box_cadastro">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <span>
            <h1>Cadastre-se</h1>
            <p id="fechar" onClick={props.fecharCadastro}>X</p>
          </span>
          <div id="infos">
            <input className="cad" type="text" name="nome" placeholder="Nome:" />
            <input
              className="cad"
              type="text"
              name="usuario"
              placeholder="Nome de Usuário:"
            />
            <input className="cad" type="date" name="dataNasc" />
            <input className="cad" type="email" name="email" placeholder="E-mail:" />
            <input className="cad" type="password" name="senha" placeholder="Senha: " />
            <input className="cad cad_button" type="submit" value="Cadastrar" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

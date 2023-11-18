import React, { useState } from 'react';
import api from "../../../backend/controler/api_cadastro";


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

        props.fecharCadastro();
      }
    } else {
      setErro(resposta.informacoes);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p>{Erro}</p>

        <label htmlFor="nomee">NOME</label>
        <input className="form_pass" id='nomee' type="text" name="nome" placeholder="Digite aqui..." />

        <label htmlFor="email">E-MAIL</label>
        <input className="form_pass" id='email' type="email" name="email" placeholder="Digite aqui..." />

        <label htmlFor="senha">SENHA</label>
        <input className="form_pass" id='senha' type="password" name="senha" placeholder="Digite aqui..." />

        <label htmlFor="confSenha">CONFIRMAR SENHA</label>
        <input className="form_pass" id='confSenha' type="password" name="confsenha" placeholder="Digite aqui..." />


        <span className='contain-butt'>
          <input className="form_button" type="submit" value="ENTRAR" />
          <button className="form_button gog">ENTRAR COM GOOGLE</button>
        </span>

      </form>
    </>
  );
}
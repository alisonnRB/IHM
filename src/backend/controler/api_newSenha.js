import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
  //? prepara o objeto para enviar no padrão RESTful
  enviar: async (senhaAntiga , NovaSenha) => {

    const id = sessionStorage.getItem('session');
    if (!id) {
      setVariavelGlobal(false);
      await auth.enviar();
      
    }

    let idioma = localStorage.getItem("idioma");

    if(!idioma || (idioma != 'PT' && idioma != 'EN' && idioma != 'ES')){
        idioma = 'EN';
    }
    
    let user = {
      id: id,
      senhaAntiga: senhaAntiga,
      NovaSenha: NovaSenha,
      idioma: idioma,
    };

    //? prepara as informações de methodo e cabeçalhos para fazer a requisição
    let requisição = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    //TODO faz a requisição
    console.log(requisição);

    //! coloque o seu ip ali
    const response = await fetch('http://localhost/server/newSenha.php', requisição);


    //TODO espera a resposta do servidor e armazena para retornar ao cliente
    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};
import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
  //? prepara o objeto para enviar no padrão RESTful
  enviar: async (idLivro) => {
    
    const id = sessionStorage.getItem('session');
    if (!id) {
      setVariavelGlobal(false);
      await auth.enviar();
      
    }

    //? prepara as informações de methodo e cabeçalhos para fazer a requisição
    let requisição = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };


    //TODO faz a requisição

    //! coloque o seu ip ali
    const response = await fetch(`http://literary-ihm.com/server/infoslivros.php?idLivro=${idLivro}`, requisição);

    //TODO espera a resposta do servidor e armazena para retornar ao cliente
    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};


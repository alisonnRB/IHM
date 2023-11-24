import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
  enviar: async (formData, nome) => {
    //? recebe um objeto formData e adiciona as informações que faltam 
    const id = sessionStorage.getItem("session");
    if (!id) {
      setVariavelGlobal(false);
      await auth.enviar();
      
    }

    let idioma = localStorage.getItem("idioma");

    if(!idioma || (idioma != 'PT' && idioma != 'EN' && idioma != 'ES')){
        idioma = 'EN';
    }

    formData.append('id', id);
    formData.append('nome', nome);
    formData.append('idioma', idioma);

    //TODO faz a requisição
    //! coloque o seu ip ali
    const response = await fetch('http://localhost/server/config_perfil.php', {
      method: 'POST',
      body: formData,
    });

    //TODO espera a resposta do servidor e armazena para retornar ao cliente
    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};

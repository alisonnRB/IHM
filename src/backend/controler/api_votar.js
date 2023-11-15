import auth from "./api_autenticar";

export default {
  //? prepara o objeto para enviar no padrão RESTful
  enviar: async (id_ref, chave) => {
    const id = sessionStorage.getItem('session');
    let user = {
      id: id,
      id_ref: id_ref,
      chave: chave,

    };
    //? prepara as informações de methodo e cabeçalhos para fazer a requisição
    let requisição = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    //TODO faz a requisição

    //! coloque o seu ip ali
    const response = await fetch('http://10.1.1.211/server/votar.php', requisição);
    const resposta = await fetch('http://10.1.1.211/server/contaVotos.php', requisição);

    //TODO espera a resposta do servidor e armazena para retornar ao cliente
    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};
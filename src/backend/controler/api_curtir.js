import auth from "./api_autenticar";


export default {
  //? prepara o objeto para enviar no padrão RESTful
  enviar: async (id_ref, tipo, coment) => {
    const id = sessionStorage.getItem('session');
    let user = {
      id_user: id,
      id_ref: id_ref,
      tipo: tipo,
      coment: coment,
    };
    //? prepara as informações de methodo e cabeçalhos para fazer a requisição
    let requisição = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    //TODO faz a requisição

    //! coloque o seu ip ali
    const response = await fetch('http://192.168.255.56/server/curtir.php', requisição);
    fetch('http://192.168.255.56/server/contaCurtidas.php');

    //TODO espera a resposta do servidor e armazena para retornar ao cliente
    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};


import auth from "./api_autenticar";

export default {
  enviar: async (formData, nome) => {
    //? recebe um objeto formData e adiciona as informações que faltam 
    const id = sessionStorage.getItem("session");

    formData.append('id', id);
    formData.append('nome', nome);

    //TODO faz a requisição
    //! coloque o seu ip ali
    const response = await fetch('http://192.168.255.193/server/config_perfil.php', {
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

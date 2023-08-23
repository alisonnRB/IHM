export default {
    enviar: async (id, formData, nome, selecao) => {
        //? recebe um objeto formData e adiciona as informações que faltam 
        formData.append('id', id);
        formData.append('nome', nome);
        formData.append('selecao', selecao);
  
        //TODO faz a requisição
        //! coloque o seu ip ali
        const response = await fetch('http://192.168.255.56/server/create_livro.php', {
            method: 'POST',
            body: formData,
        });
  
        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json();
        return data;
    },
  };
  
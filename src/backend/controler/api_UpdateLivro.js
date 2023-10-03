export default {
    enviar: async (idLivro, id, formData, nome, selecao, classificacao, publico, finalizado, color, color2) => {
        //? recebe um objeto formData e adiciona as informações que faltam 
        formData.append('id', id);
        formData.append('color', color);
        formData.append('color2', color2);
        formData.append('idLivro', idLivro);
        formData.append('nome', nome);
        formData.append('selecao', JSON.stringify(selecao));
        formData.append('classificacao', classificacao);
        formData.append('publico', publico);
        formData.append('finalizado', finalizado);
  
        //TODO faz a requisição
        //! coloque o seu ip ali
        const response = await fetch('http://192.168.255.56/server/UpdateLivro.php', {
            method: 'POST',
            body: formData,
        });
  
        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json();
        return data;
    },
  };
  
import auth from "./api_autenticar";

export default {
    enviar: async (formData, nome, selecao, classificacao) => {
        const id = sessionStorage.getItem('session');
        //? recebe um objeto formData e adiciona as informações que faltam 
        formData.append('id', id);
        formData.append('nome', nome);
        formData.append('selecao', JSON.stringify(selecao));
        formData.append('classificacao', classificacao);

        //TODO faz a requisição
        //! coloque o seu ip ali
        const response = await fetch('http://10.1.1.211/server/create_livro.php', {
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

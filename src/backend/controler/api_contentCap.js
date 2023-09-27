export default {
    enviar: async (id, cap, idLivro, nome) => {
        //? prepara o objeto para enviar no padrão RESTful
        let user = {
            id: id,
            cap: cap,
            idLivro: idLivro,
            nome: nome,
        };
        
        //? prepara as informações de methodo e cabeçalhos para fazer a requisição
        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //? converte para json
            body: JSON.stringify(user),
           
        };
        //TODO faz a requisição
        //! coloque o seu ip ali
        const response = await fetch('http://192.168.255.56/server/buscaContent.php', requisição);

        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json(); //* aguarda um resposta json
        return data;
    },
};
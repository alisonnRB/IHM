export default {
    enviar: async (id, tipo) => {
        let user = {
            id: id,
            tipo: tipo,
        };

        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            //? converte para json
            body: JSON.stringify(user),
        };

        //TODO faz a requisição
        //! coloque o seu ip alii
        const response = await fetch('http://10.1.1.211/server/busca_comentarios.php', requisição);

        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json(); //* aguarda um resposta json
        return data;
    },
};

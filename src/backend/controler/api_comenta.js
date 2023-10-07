export default {
    enviar: async (id_user, tipo, id_ref, texto, resposta, idResposta, conversa) => {
        let user = {
            id_user: id_user,
            tipo: tipo,
            id_ref: id_ref,
            texto: texto,
            resposta: resposta,
            idResposta: idResposta,
            conversa: conversa,
        };

        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            //? converte para json
            body: JSON.stringify(user),
        };

        //TODO faz a requisição
        //! coloque o seu ip alii
        const response = await fetch('http://192.168.255.56/server/comenta.php', requisição);

        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json(); //* aguarda um resposta json
        return data;
    },
};



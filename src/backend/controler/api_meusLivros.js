import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
    enviar: async (idUser) => {
        const id = sessionStorage.getItem("session");
        if (!id) {
            setVariavelGlobal(false);
            await auth.enviar();
            
          }
        let user = {
            id: id,
            idUser: idUser,
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
        const response = await fetch('http://localhost/server/meusLivros.php', requisição);
        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json(); //* aguarda um resposta json
        if (data.informacoes == "não autorizado") {
            await auth.enviar();
        }
        return data;
    },
};
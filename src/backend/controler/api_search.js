import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
    //? prepara o objeto para enviar no padrão RESTful
    enviar: async (nome, Novo, Finalizado, classificacao, selecao, indice) => {
        const id = sessionStorage.getItem('session');

        if (!id) {
            setVariavelGlobal(false);
            await auth.enviar();
            
          }

        let user = {
            nome: nome,
            Novo: Novo,
            Finalizado: Finalizado,
            classificacao: classificacao,
            selecao: selecao,
            indice: indice,
        };
        //? prepara as informações de methodo e cabeçalhos para fazer a requisição
        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };

        //TODO faz a requisição

        //! coloque o seu ip ali
        const response = await fetch('http://192.168.255.56/server/SearchLivros.php', requisição);

        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json();
        if (data.informacoes == "não autorizado") {
            await auth.enviar();
        }
        return data;
    },
};


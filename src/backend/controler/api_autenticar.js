import { setVariavelGlobal } from "../../GvarAuth";

export default {
    //? prepara o objeto para enviar no padrão RESTful
    enviar: async () => {
        let token = sessionStorage.getItem('session');

        const authorizationHeader = `Bearer ${token}`;

        //? prepara as informações de methodo e cabeçalhos para fazer a requisição
        let requisição = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorizationHeader,
            },
        };

        //! coloque o seu ip ali
        const response = await fetch('http://192.168.255.193/server/token/auth.php', requisição);


        //TODO espera a resposta do servidor e armazena para retornar ao cliente
        try {
            const data = await response.json();
            if (!data.ok) {
                setVariavelGlobal(true);
            } else {
                setVariavelGlobal(false);
            }
            return data;
        }catch(e){
            setVariavelGlobal(true);
        }
    },
};


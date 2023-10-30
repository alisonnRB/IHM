import auth from "./api_autenticar";

export default {
    enviar: async () => {
        const id = sessionStorage.getItem("session");
        let user = {
            id: id
        };

        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };

        const response = await fetch('http://10.1.1.211/server/gender.php', requisição);

        const data = await response.json();
        if (data.informacoes == "não autorizado") {
            await auth.enviar();
        }
        return data;
    },
};


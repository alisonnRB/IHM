import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
    enviar: async () => {
        const id = sessionStorage.getItem("session");
        if (!id) {
            setVariavelGlobal(false);
            await auth.enviar();
            
          }
          
        let idioma = localStorage.getItem("idioma");

        if(!idioma || (idioma != 'PT' && idioma != 'EN' && idioma != 'ES')){
            idioma = 'EN';
        }

        let user = {
            id: id,
            idioma: idioma,
        };

        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };

        const response = await fetch('http://192.168.255.193/server/gender.php', requisição);

        const data = await response.json();
        if (data.informacoes == "não autorizado") {
            await auth.enviar();
        }
        return data;
    },
};


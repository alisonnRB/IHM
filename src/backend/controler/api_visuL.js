import auth from "./api_autenticar";
import { setVariavelGlobal } from "../../GvarAuth";

export default {
  enviar: async (id) => {
    const ids = sessionStorage.getItem('session');
    if (!ids) {
      setVariavelGlobal(false);
      await auth.enviar();
    }

    let user = {
        id: id,
    };

    let requisição = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    const response = await fetch('http://192.168.255.56/server/visus.php', requisição);

    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};


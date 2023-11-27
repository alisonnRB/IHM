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

    console.log(requisição.body)

    const response = await fetch('http://localhost/server/visus.php', requisição);

    const data = await response.json();
    if (data.informacoes == "não autorizado") {
      await auth.enviar();
    }
    return data;
  },
};

